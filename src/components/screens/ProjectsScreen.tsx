import React from 'react';
import { Project } from '../../types/Project';
import { ProjectsList } from '../elements/ProjectsList';
import { PageLayout } from '../layout/PageLayout';
import { Badge } from '../shared/Badge';
import { PageHeader } from '../shared/PageHeader';
import { Row } from '../shared/Row';
import { SEO } from '../shared/SEO';

type ProjectsScreenProps = {
  projects: Project[];
};

export const ProjectsScreen = (
  props: ProjectsScreenProps
): React.ReactElement => {
  const { projects } = props;

  const numOfProjects = projects.length;

  return (
    <PageLayout>
      <SEO
        title="Projetos"
        description="Projetos que resolvem problemas reais e/ou me ajudam a
        entender conceitos que venho estudando."
      />
      <Row>
        <PageHeader>Projetos</PageHeader>
        <Badge className="ml-3 self-start">{numOfProjects}</Badge>
      </Row>

      <ProjectsList projects={projects} />
    </PageLayout>
  );
};
