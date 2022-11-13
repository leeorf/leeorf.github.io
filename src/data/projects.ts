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
    startDate: '21/09/2022',
    endDate: '27/10/2022',
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
