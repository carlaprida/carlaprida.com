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
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '89ckr9wpsq4v',
        accessToken: '915c692805251756d601c0e3db626030aad85aacb813831cf998814b14b93dfa',
      },
    },
  ],
};
