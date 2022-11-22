import React from 'react';
import combineClasses from 'classnames';

import { Tag as TagType } from '../../types/Tag';
import { Expander } from './Expander';
import { Tag } from './Tag';

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
