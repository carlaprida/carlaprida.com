module.exports = {
  siteMetadata: {
    title: 'Carla Prida',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
};
