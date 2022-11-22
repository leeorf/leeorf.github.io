import React from 'react';
import { routes } from '../../constants/routes';

import { HyperLink } from '../shared/HyperLink';
import { InteractiveText } from '../shared/InteractiveText';

export const Greeting = (): React.ReactElement => {
  const projectsLinkElement = (
    <HyperLink link={routes.projects}>
      <InteractiveText className="font-bold underline">
        projetos
      </InteractiveText>
    </HyperLink>
  );

  return (
    <p>
      Olá, me chamo Leo! Um desenvolvedor com um passado de amor e ódio por
      códigos, mas que hoje ama o que faz. Tenho bastante interesse na parte do
      front end que lida com automações (deixar os devs do time mais
      confortáveis para desenvolver), performance e prezo muito por manter uma
      codebase organizada e que seja fácil de manter e evoluir. No meu tempo
      livre (normalmente 2-3 horas pela noite) desenvolvo {projectsLinkElement}{' '}
      que resolvem problemas reais (meu ou de outras pessoas) ou me ajudam a
      entender conceitos que venho estudando. Também tenho planos de me tonar um
      contribuidor ativo de projetos open source.
    </p>
  );
};
