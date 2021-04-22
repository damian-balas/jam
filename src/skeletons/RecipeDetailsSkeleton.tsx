import classNames from 'classnames';

import styles from '../styles/skeletons/RecipeDetailsSkeleton/RecipeDetailsSkeleton.module.scss';

const RecipeDetailsSkeleton: React.FunctionComponent = () => {
  return (
    <div className={styles.shimmer}>
      <div className={styles.recipeDetailsTopSection}>
        <div className={styles.recipeDetailsBannerWrapper}>
          <div
            className={classNames(
              styles.recipeDetailsBanner,
              styles.shimmerOverlay,
            )}
          />
        </div>
        <div
          className={classNames(
            styles.recipeDetailsTitle,
            styles.shimmerOverlay,
          )}
        />
      </div>
      <div className={styles.recipeDetailsInfo}>
        <div
          className={classNames(
            styles.recipeDetailsIngredientsTitle,
            styles.shimmerOverlay,
          )}
        />
        <div className={styles.recipeDetailsIngredientsWrapper}>
          <span
            className={classNames(
              styles.recipeDetailsIngredient,
              styles.shimmerOverlay,
            )}
          />
          <span
            className={classNames(
              styles.recipeDetailsIngredient,
              styles.shimmerOverlay,
            )}
          />
          <span
            className={classNames(
              styles.recipeDetailsIngredient,
              styles.shimmerOverlay,
            )}
          />
        </div>
      </div>
      <div className={styles.recipeDetailsMethodWrapper}>
        <div
          className={classNames(
            styles.recipeDetailsMethodTitle,
            styles.shimmerOverlay,
          )}
        />
        <div
          className={classNames(
            styles.recipeDetailsMethodText,
            styles.shimmerOverlay,
          )}
        />
      </div>
    </div>
  );
};

export default RecipeDetailsSkeleton;
