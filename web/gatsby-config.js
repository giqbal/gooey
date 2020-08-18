module.exports = {
  siteMetadata: {
    title: `Gooey Store`,
    description: `This is a online store for Goeey bakery`,
    author: `Gohar Iqbal`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-storyblok',
      options: {
        accessToken: '3jXLG3gYBAwzqLIJ7ZNiMgtt',
        homeSlug: 'home',
        version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
