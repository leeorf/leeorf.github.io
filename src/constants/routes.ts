import { Link } from '../types/Link';

type Slug = 'home' | 'projects' | 'blog';

export type Route = {
  path: string;
  caption: string;
};

type Routes = Record<Slug, Link>;

export const routes: Routes = {
  home: {
    caption: 'About',
    url: '/',
  },
  projects: {
    caption: 'Projects',
    url: '/projects',
  },
  blog: {
    caption: 'Blog',
    url: 'https://leeorf.dev',
  },
};

export const routesList = Object.keys(routes).map(key => {
  const routeKey = key as Slug;
  return { ...routes[routeKey] };
});
