import React, { useState } from 'react';
import { InteractiveText } from './InteractiveText';

/* eslint-disable @typescript-eslint/no-explicit-any */
type ExpanderProps = {
  items: any[];
  numToShow: number;
  onRender: (item: any) => React.ReactElement;
};

export const Expander = (props: ExpanderProps): React.ReactElement | null => {
  const { items, onRender, numToShow } = props;

  const [expanded, setExpanded] = useState(false);

  if (!items.length) {
    return null;
  }

  let somethingToHide = false;

  const filteredItems = items
    .filter((_, index) => {
      const hidden: boolean = index >= numToShow;

      if (hidden) {
        somethingToHide = true;
      }

      return expanded || !hidden;
    })
    .map(onRender)
    .map((child, index) => {
      // eslint-disable-next-line react/no-array-index-key
      return <li key={index}>{child}</li>;
    });

  const showMoreButton = somethingToHide ? (
    <li>
      <button
        type="button"
        className="text-xs font-light"
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <InteractiveText>{expanded ? '- less' : '+ more'}</InteractiveText>
      </button>
    </li>
  ) : null;

  return (
    <ul className="flex flex-row flex-wrap space-x-2 space-y-2 items-end justify-center sm:justify-start">
      {filteredItems}
      {showMoreButton}
    </ul>
  );
};
