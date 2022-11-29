import { Link } from './Link';

export enum SocialLinkTypes {
  gitHub = 'GitHub',
  linkedIn = 'LinkedIn',
}

export type SocialLink = Link & {
  type?: SocialLinkTypes;
  secondary?: boolean;
};
