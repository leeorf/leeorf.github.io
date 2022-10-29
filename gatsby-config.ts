import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `leeorf.dev`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    /**
     * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx
     */
    'gatsby-plugin-mdx',

    /**
     * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-postcss
     */
    'gatsby-plugin-postcss',

    /**
     * @see https://www.gatsbyjs.com/plugins/gatsby-source-filesystem
     */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};

export default config;
