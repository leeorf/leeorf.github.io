import React from 'react';
import { PageLayout } from '../layout/PageLayout';
import { SEO } from '../shared/SEO';

export const NotFoundScreen = (): React.ReactElement => {
  return (
    <PageLayout>
      <SEO title="Página não encontrada" description="Página não encontrada" />
      <h1>Página não encontrada.</h1>
    </PageLayout>
  );
};
