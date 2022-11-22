import React from 'react';
import { Project } from '../../types/Project';
import { ProjectsList } from '../elements/ProjectsList';
import { PageLayout } from '../layout/PageLayout';
import { Badge } from '../shared/Badge';
import { PageHeader } from '../shared/PageHeader';
import { Row } from '../shared/Row';

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
      <Row>
        <PageHeader>Projetos</PageHeader>
        <Badge className="ml-3 self-start">{numOfProjects}</Badge>
      </Row>

      <ProjectsList projects={projects} />
    </PageLayout>
  );
};
