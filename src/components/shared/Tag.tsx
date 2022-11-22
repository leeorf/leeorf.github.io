import React from 'react';
import { Tag as TagType } from '../../types/Tag';

type TagProps = {
  tag: TagType;
};

export const Tag = (props: TagProps): React.ReactElement => {
  const { tag } = props;

  return (
    <span
      className=" bg-gray-200 text-xs px-2 py-1 rounded-sm inline-block mr-2 mb-2"
      key={tag}
    >
      {tag}
    </span>
  );
};
