import { DateString } from './Date';
import { GithubRepo } from './GithubRepo';
import { Image } from './Image';
import { Link } from './Link';
import { Tag } from './Tag';

export type Project = {
  id: string;
  name?: string;
  summary?: string[];
  cover?: Image;
  srcUrl?: Link;
  demoUrl?: Link;
  startDate?: DateString;
  endDate?: DateString;
  tags?: Tag[];
  archived?: boolean;
  links?: Link[];
  repo?: GithubRepo;
};
