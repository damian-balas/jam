import { Entry } from 'contentful';
import { GetStaticProps } from 'next';
import Error from '../components/Error';
import RecipeList from '../components/RecipeList';
import { IRecipeFields } from '../schema/generated/contentful';
import contentfulClient from '../services/contentfulClient';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await contentfulClient.getEntries<IRecipeFields>({
      content_type: 'recipe',
    });

    return {
      props: {
        recipes: res.items,
        error: null,
      },
      revalidate: 5,
    };
  } catch (error) {
    return {
      props: {
        recipes: [],
        error: error.message,
      },
      revalidate: 5,
    };
  }
};

type RecipesProps = {
  recipes: Entry<IRecipeFields>[];
  error: string | null;
};

const Recipes: React.FunctionComponent<RecipesProps> = ({ recipes, error }) => {
  if (error) {
    return (
      <Error
        heading="Sorry! Something went wrong..."
        paragraph=" Please reload the page or try again later."
      />
    );
  }

  return (
    <div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Recipes;
