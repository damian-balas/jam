import Link from 'next/link';
import Image from 'next/image';

import { IRecipeFields } from '../../schema/generated/contentful';

import styles from '../../styles/RecipeCard/RecipeCard.module.scss';

type RecipeCardProps = {
  title: IRecipeFields['title'];
  slug: IRecipeFields['slug'];
  cookingTime: IRecipeFields['cookingTime'];
  thumbnail: IRecipeFields['thumbnail'];
};

const RecipeCard: React.FunctionComponent<RecipeCardProps> = ({
  title,
  slug,
  cookingTime,
  thumbnail,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardThumbnail}>
        <Image
          className={styles.cardThumbnailImage}
          src={`https:${thumbnail.fields.file.url}`}
          layout="fill"
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardInfo}>
          <h4 className={styles.cardTitle}>{title}</h4>
          <p className={styles.cardCookingTime}>
            Takes approx {cookingTime} mins to make
          </p>
        </div>
        <div className={styles.cardActions}>
          <Link href={`/recipes/${slug}`}>
            <a className={styles.cardLink}>Cook this</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
