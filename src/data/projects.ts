import { siteURL } from '../constants/siteMeta';
import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 'secret-hash',
    name: '#️⃣ Secret Hash',
    summary: ['Extensão do Chrome para gerar um hash a partir de um texto.'],
    srcUrl: {
      url: 'https://github.com/leeorf/secret-hash-chrome-extesion',
    },
    demoUrl: {
      url: 'https://chrome.google.com/webstore/detail/secret-hash/ibpdnpmcfhoniipkhjflmmaclfedbgcj',
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
      'Meu webiste pessoal com uma lista de projetos e posts sobre carreira, vida, desenvolvimento web e tecnologia.',
    ],
    srcUrl: {
      url: 'https://github.com/leeorf/leeorf.github.io',
    },
    demoUrl: {
      url: siteURL,
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
