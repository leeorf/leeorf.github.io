import React from 'react';
import { FiCalendar } from 'react-icons/fi';
import { DateString } from '../../types/Date';
import { dateString } from '../../utils';
import { Row } from './Row';

type DateRangeProps = {
  start?: DateString;
  end?: DateString;
  className?: string;
  withDay?: boolean;
};

export const DateRange = (props: DateRangeProps): React.ReactElement | null => {
  const { start, end, className, withDay } = props;

  if (!start && !end) {
    return null;
  }

  const startDateString = start ? dateString(start, { withDay }) : null;
  const endDateString = end ? dateString(end, { withDay }) : null;
  const separator = start && end ? ' → ' : null;

  return (
    <div className={className}>
      <Row>
        <FiCalendar className="mr-1" />
        <div>
          {startDateString}
          {separator}
          {endDateString}
        </div>
      </Row>
    </div>
  );
};
