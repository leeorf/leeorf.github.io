type UseImagesQueryChildImageSharpFluid = {
  base64: string | null;
  aspectRatio: number;
  src: string;
  srcSet: string;
  sizes: string;
};

type UseImagesQueryChildImageSharp = {
  fluid: UseImagesQueryChildImageSharpFluid | null;
};

type UseImagesQueryNode = {
  base: string;
  name: string;
  relativePath: string;

  childImageSharp: UseImagesQueryChildImageSharp | null;
};

export type UseImagesQueryResult = {
  allFile: {
    nodes: UseImagesQueryNode[];
  };
};
