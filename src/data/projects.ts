import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 'secret-hash',
    name: '#️⃣ Secret Hash Chrome Extension',
    summary: ['Chrome extension to secretly hash text.'],
    srcUrl: {
      url: 'https://github.com/leeorf/secret-hash-chrome-extesion',
    },
    demoUrl: {
      url: '',
    },
    cover: {
      srcPath: 'projects/secret-hash/cover.png',
    },
    startDate: '2022-09-21',
    endDate: '2022-10-27',
    tags: [
      'Chrome Extension',
      'TypeScript',
      'Webpack',
      'React',
      'Hash Algorithm',
    ],
    repo: {
      owner: 'leeorf',
      name: 'secret-hash-chrome-extesion',
    },
  },
  {
    id: 'leeorf-dev',
    name: '👨🏾‍💻 leeorf.dev',
    summary: [
      'My personal website with a list of my projects and blog posts about career, life and web-development.',
    ],
    srcUrl: {
      url: 'https://github.com/leeorf/leeorf.github.io',
    },
    demoUrl: {
      url: 'https://leeorf.github.io/',
    },
    cover: {
      srcPath: 'projects/leeorf-dev/cover.png',
    },
    startDate: '2022-10-28',
    tags: ['TypeScript', 'React', 'Gatsby', 'Blog', 'Portfolio'],
    repo: {
      owner: 'leeorf',
      name: 'leeorf.github.io',
    },
  },
];
