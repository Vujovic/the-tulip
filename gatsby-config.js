module.exports = {
  siteMetadata: {
    title: `The Tulip marketing agency`,
    description: `Full digital marketing services. We help build brands, find future loyal customers for you, and help keep your business relevant online.`,
    author: `https://njegos.dev`,
    siteUrl: `https://www.the-tulip.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-purgecss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
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
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Lato: 400, 700`],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
