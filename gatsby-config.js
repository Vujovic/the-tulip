module.exports = {
  siteMetadata: {
    title: `The Tulip marketing agency`,
    description: `Full digital marketing services. We help build brands, find future loyal customers for you, and help keep your business relevant online.`,
    author: `https://njegos.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `the-tulip.com`,
        short_name: `the Tulip`,
        start_url: `/`,
        lang: `en`,
        background_color: `#ffffff`,
        theme_color: `#F97C7C`,
        display: `standalone`,
        icon: `src/images/tulip-icon.png`,
        localize: [
          {
            start_url: `/zh/`,
            lang: `zh`,
            name: `the-tulip.com`,
            short_name: `the Tulip`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `zh`],
        defaultLanguage: `en`,
        redirect: true,
        redirectComponent: require.resolve(`./src/components/redirect.js`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
