import { createClient, EntryCollection } from "contentful";
import { GetStaticPropsContext } from "next";
import { IRecipeFields } from "../schema/generated/contentful";

import styles from "./Home.module.scss";

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

  const res = await client.getEntries({
    content_type: "recipe",
  });

  return {
    props: {
      recipes: res.items,
    },
  };
}

type RecipesProps = {
  recipes: EntryCollection<IRecipeFields>;
};

const Recipes: React.FunctionComponent<RecipesProps> = ({ recipes }) => {
  console.log(recipes);
  return <div>Recipe List</div>;
};

export default Recipes;
