import { graphql, useStaticQuery } from 'gatsby';
import { UseImagesQueryResult } from '../types/UseImagesQuery';

export const useFluidCovers = () => {
  const images = useStaticQuery<UseImagesQueryResult>(graphql`
    query UseImagesQuery {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          base
          name
          relativePath
          childImageSharp {
            gatsbyImageData(
              transformOptions: {
                fit: COVER
                cropFocus: CENTER
                grayscale: false
              }
            )
          }
        }
      }
    }
  `);

  return images.allFile.nodes;
};
