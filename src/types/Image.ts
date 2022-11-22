import { IGatsbyImageData } from 'gatsby-plugin-image';

export type Image = {
  srcPath?: string;
  caption?: string;
};

// The type that is being returned after using the {...GatsbyImageSharpFluid} GraphQL operator.
export type FluidImage = IGatsbyImageData;
