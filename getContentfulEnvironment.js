const contentfulManagement = require("contentful-management");
require('dotenv').config({path: './.env.local'});

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken:
      process.env
        .NEXT_PUBLIC_CONTENTFUL_PERSONAL_CONTENT_MANAGEMENT_ACCESS_TOKEN,
  });

  return contentfulClient
    .getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT));
};