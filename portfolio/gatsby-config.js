/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://ayon-bhowmick.github.io/`,
  },
plugins: [`gatsby-plugin-sass`,
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [
        `https://fonts.gstatic.com`,
        `https://fonts.googleapis.com`,
      ],
      web: [
        {
          name: `Roboto`,
          file: `https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap`
        },
      ],
    },
  }],
}
