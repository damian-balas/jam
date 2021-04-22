import { Entry } from 'contentful';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { IRecipeFields } from '../../../schema/generated/contentful';
import contentfulClient from '../../../services/contentfulClient';

import styles from '../../../styles/RecipeDetails/RecipeDetails.module.scss';
import RecipeDetailsSkeleton from '../../../skeletons/RecipeDetailsSkeleton';
import Logger from '../../../services/logger';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const noDataErrorMessage =
    'No data found! Try to reload the site or check out some other recipes.';

  try {
    if (!params?.slug) {
      throw new Error(noDataErrorMessage);
    }

    const res = await contentfulClient.getEntries<IRecipeFields>({
      content_type: 'recipe',
      'fields.slug': params.slug,
    });

    if (!res?.items?.length) {
      throw new Error(noDataErrorMessage);
    }

    return {
      props: {
        recipe: res.items[0],
        error: null,
      },
      revalidate: 5,
    };
  } catch (error) {
    Logger.error(error);

    return {
      props: {
        recipe: null,
        error: error.message,
      },
      revalidate: 5,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await contentfulClient.getEntries<IRecipeFields>({
      content_type: 'recipe',
    });

    const paths = res.items.map((item) => {
      return {
        params: {
          slug: item.fields.slug,
        },
      };
    });

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    Logger.error(error);

    return {
      paths: [],
      fallback: true,
    };
  }
};

type RecipeDetailsProps = {
  recipe: Entry<IRecipeFields>;
  error: string | null;
};

const RecipeDetails: React.FunctionComponent<RecipeDetailsProps> = ({
  recipe,
  error,
}) => {
  if (!recipe && !error) {
    return <RecipeDetailsSkeleton />;
  }

  if (error) {
    return (
      <div>
        <h3>{error}</h3>
      </div>
    );
  }

  const {
    featuredImage,
    title,
    cookingTime,
    ingredients = [],
    method,
  } = recipe.fields;

  return (
    <div className="recipe-details">
      <div className={styles.recipeDetailsBanner}>
        <Image
          className={styles.recipeDetailsBannerImage}
          layout="fill"
          src={`https:${featuredImage.fields.file.url}`}
        />
        <h2 className={styles.recipeDetailsTitle}>
          {title}
          <p className={styles.recipeDetailsCookingTime}>
            Takes approx{' '}
            <span className={styles.recipeDetailsCookingTimeBold}>
              {cookingTime} mins
            </span>{' '}
            to make
          </p>
        </h2>
      </div>
      <div className={styles.recipeDetailsInfo}>
        <h3 className={styles.recipeDetailsIngredientsTitle}>Ingredients</h3>
        <div className={styles.recipeDetailsIngredientsWrapper}>
          {ingredients.map((ingredient) => (
            <span className={styles.recipeDetailsIngredient} key={ingredient}>
              {ingredient}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.recipeDetailsMethodWrapper}>
        <h3 className={styles.recipeDetailsMethodTitle}>Method</h3>
        <div className={styles.recipeDetailsMethodText}>
          {documentToReactComponents(method)}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
