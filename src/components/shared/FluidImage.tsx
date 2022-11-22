import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useFluidCover } from '../../hooks/useFluidCover';
import { FluidImage as FluidImageType, Image } from '../../types/Image';

type FluidImageProps = {
  image?: Image | null | undefined;
  fluidImage?: FluidImageType | null | undefined;
  className?: string;
  imgClassName?: string;
};

export const FluidImage = (
  props: FluidImageProps
): React.ReactElement | null => {
  const {
    image,
    fluidImage: fluidImageProvided,
    className = '',
    imgClassName = '',
  } = props;

  const fluidImageFetched = useFluidCover({ imagePath: image?.srcPath });
  const fluidImage = fluidImageProvided || fluidImageFetched;

  if (!fluidImage) {
    return null;
  }

  return (
    <GatsbyImage
      image={fluidImage}
      className={className}
      style={{ height: '100%' }}
      alt={image?.caption || ''}
      title={image?.caption || ''}
      imgClassName={imgClassName}
    />
  );
};
