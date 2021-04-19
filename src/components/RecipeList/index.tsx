import { Entry } from "contentful";
import React from "react";
import { IRecipeFields } from "../../schema/generated/contentful";
import RecipeCard from "../RecipeCard";
import styles from "./RecipeList.module.scss";

type RecipeListProps = {
  recipes: Entry<IRecipeFields>[];
};

const RecipeList: React.FunctionComponent<RecipeListProps> = ({ recipes }) => {
  if (recipes.length === 0) {
    return (
      <div>
        <h3>There are no recipes yet...</h3>;
      </div>
    );
  }

  return (
    <div className={styles.recipeList}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.sys.id}
          title={recipe.fields.title}
          slug={recipe.fields.slug}
          cookingTime={recipe.fields.cookingTime}
          thumbnail={recipe.fields.thumbnail}
        />
      ))}
    </div>
  );
};

export default RecipeList;
