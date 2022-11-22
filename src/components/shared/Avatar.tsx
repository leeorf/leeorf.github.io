import React from 'react';
import combineClasses from 'classnames';

import { Image } from '../../types/Image';
import { FluidImage } from './FluidImage';

type AvatarProps = {
  avatar: Image;
  className?: string;
  imgClassName?: string;
};

export const Avatar = (props: AvatarProps): React.ReactElement => {
  const { avatar, className = '', imgClassName = '' } = props;

  const classNames = combineClasses(className, {});

  return (
    <div className={classNames}>
      <FluidImage image={avatar} imgClassName={imgClassName} />
    </div>
  );
};
