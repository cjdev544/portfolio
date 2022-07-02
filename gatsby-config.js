module.exports = {
  siteMetadata: {
    title: `portfolio-cjdev544`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Ubuntu Mono Condensed:300,700, Ubuntu Mono Condensed:i300,i700',
          ],
        },
      },
    },
    `gatsby-plugin-fontawesome-css`,
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-modal-routing`,
  ],
}
