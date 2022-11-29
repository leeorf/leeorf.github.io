import type { GatsbyConfig } from 'gatsby';

import { siteMetadata } from './src/data/siteMetadata';

const config: GatsbyConfig = {
  siteMetadata,
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
     * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-image
     */
    'gatsby-plugin-image',

    /**
     * @see https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp
     */
    'gatsby-plugin-sharp',

    /**
     * @see https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp
     */
    'gatsby-transformer-sharp',

    /**
     * @see https://www.gatsbyjs.com/plugins/gatsby-source-filesystem
     */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ],
};

export default config;
