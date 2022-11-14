import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 'secret-hash',
    name: 'Secret Hash Chrome Extension',
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
      project: 'secret-hash-chrome-extesion',
    },
  },
];
