import { months } from './constants/date';

type DateStringOptions = {
  withDay?: boolean;
};

export const idFromSetence = (value: string) => {
  return value
    .split(' ')
    .map(word => word.slice(0, 2))
    .join('');
};

export const dateString = (
  isoDate: string,
  options?: DateStringOptions
): string => {
  let withDays;

  if (options) {
    withDays = options.withDay;
  }

  // Very silly validation, improve later
  if (!isoDate.match(/^\d{4}-\d{2}-\d{2}$/)) {
    throw new Error('ISO 8601 Date expected! YYYY-mm-dd');
  }

  const date = new Date(isoDate);

  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = withDays ? date.getDate() : '';
  const separator = withDays ? ', ' : ' ';

  return `${month}${separator}${day}${year}`;
};
