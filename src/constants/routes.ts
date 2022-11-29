import { Link } from '../types/Link';

type Slug = 'home' | 'projects' | 'blog';

export type Route = {
  path: string;
  caption: string;
};

type Routes = Record<Slug, Link>;

export const routes: Routes = {
  home: {
    caption: 'Sobre',
    url: '/',
  },
  projects: {
    caption: 'Projetos',
    url: '/projects',
  },
  blog: {
    caption: 'Blog',
    url: 'https://blog.leeorf.dev',
  },
};

export const routesList = Object.keys(routes).map(key => {
  const routeKey = key as Slug;
  return { ...routes[routeKey] };
});
