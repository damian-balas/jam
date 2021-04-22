import { ContentfulClientApi, createClient } from 'contentful';

const contentfulClient = (): ContentfulClientApi => {
  if (
    !process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ||
    !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  ) {
    throw new Error(
      'No space or access token for contentful set! Please check your .env file.',
    );
  }

  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  return client;
};

export default contentfulClient();
