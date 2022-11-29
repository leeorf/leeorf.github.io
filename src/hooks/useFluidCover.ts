import { getImage } from 'gatsby-plugin-image';
import { useFluidCovers } from './useFluidCovers';

type UseFuildCoverProps = {
  imagePath?: string | null;
};

export const useFluidCover = (props: UseFuildCoverProps) => {
  const { imagePath } = props;

  const allImages = useFluidCovers();

  if (!imagePath) {
    return undefined;
  }

  const foundNode = allImages.find(node => node.relativePath === imagePath);

  if (!foundNode) {
    return undefined;
  }

  return getImage(foundNode.childImageSharp);
};
