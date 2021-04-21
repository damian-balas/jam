import { Entry } from "contentful";
import RecipeList from "../components/RecipeList";
import { IRecipeFields } from "../schema/generated/contentful";
import contentfulClient from "../services/contentfulClient";

export async function getStaticProps() {
  try {
    const res = await contentfulClient.getEntries<IRecipeFields>({
      content_type: "recipe",
    });

    return {
      props: {
        recipes: res.items,
        error: null,
        revalidate: 5,
      },
    };
  } catch (error) {
    return {
      props: {
        recipes: [],
        error: error.message,
        revalidate: 5,
      },
    };
  }
}

type RecipesProps = {
  recipes: Entry<IRecipeFields>[];
  error: string | null;
};

const Recipes: React.FunctionComponent<RecipesProps> = ({ recipes, error }) => {
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default Recipes;
