import React from 'react';
import combineClasses from 'classnames';

import { Tag as TagType } from '../../types/Tag';
import { Expander } from './Expander';

type TagsProps = {
  tags: TagType[];
  className?: string;
  numToShow?: number;
};

export const Tags = (props: TagsProps): React.ReactElement => {
  const { tags, className = '', numToShow = Infinity } = props;

  const classNames = combineClasses(className, {});

  const onRender = (tag: TagType): React.ReactElement => {
    return <Tag key={tag} tag={tag} />;
  };

  return (
    <div className={classNames}>
      <Expander items={tags} onRender={onRender} numToShow={numToShow} />
    </div>
  );
};

type TagProps = {
  tag: TagType;
};

const Tag = (props: TagProps): React.ReactElement => {
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
