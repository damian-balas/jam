import { createClient, Entry } from "contentful";
import RecipeList from "../components/RecipeList";
import { IRecipeFields } from "../schema/generated/contentful";

export async function getStaticProps() {
  if (
    !process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ||
    !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  ) {
    throw new Error(
      "No space or access token for contentful set! Please check your .env file.",
    );
  }

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
  try {
    const res = await client.getEntries<IRecipeFields>({
      content_type: "recipe",
    });

    return {
      props: {
        recipes: res.items,
        error: null,
      },
    };
  } catch (error) {
    return {
      props: {
        recipes: [],
        error: error.message,
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
