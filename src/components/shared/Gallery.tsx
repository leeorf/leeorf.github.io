import React from 'react';

type GalleryProps = {
  children: React.ReactNode;
};

export const Gallery = (props: GalleryProps): React.ReactElement => {
  const { children } = props;

  return (
    <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};
