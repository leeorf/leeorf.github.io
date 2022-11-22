import { Project } from '../../../types/Project';

const STAYS_THE_SAME = 0;
const COMES_FIRST = -1;
const COMES_AFTER = 1;

export enum SortBy {
  'startDateAsc' = 'startDateAsc',
  'startDateDesc' = 'startDateDesc',
}

type ProjectSorter = {
  sort: (a: Project, b: Project) => number;
};

type ProjectSorters = Record<SortBy, ProjectSorter>;

const time = (date: string): number => {
  return new Date(date).getTime();
};

export const projectsSorters: ProjectSorters = {
  [SortBy.startDateAsc]: {
    sort: (a, b) => {
      if (!a.startDate || !b.startDate || a.startDate === b.startDate) {
        return STAYS_THE_SAME;
      }

      return time(a.startDate) > time(b.startDate) ? COMES_FIRST : COMES_AFTER;
    },
  },
  [SortBy.startDateDesc]: {
    sort: (a, b) => {
      if (!a.startDate || !b.startDate || a.startDate === b.startDate) {
        return STAYS_THE_SAME;
      }

      return time(a.startDate) < time(b.startDate) ? COMES_FIRST : COMES_AFTER;
    },
  },
};
