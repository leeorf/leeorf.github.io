import { socialLinks } from './socialLinks';
import { Profile } from '../types/Profile';

export const profile: Profile = {
  firstName: 'Leo',
  lastName: 'Rodrigues',
  position: 'Front end pleno @ Bees/AB InBev',
  summary: [],
  avatar: {
    srcPath: 'profile/avatar_500x500.jpg',
    caption: 'Leo Rodrigues',
  },
  location: 'Paulo Afonso - Bahia, Brasil',
  tags: ['Front end', 'React', 'JavaScript', 'TypeScript'],
  socialLinks,
};
