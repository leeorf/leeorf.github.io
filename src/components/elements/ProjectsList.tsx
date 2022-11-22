import React from 'react';

import { Project } from '../../types/Project';
import { Gallery } from '../shared/Gallery';
import { ProjectPreview } from './ProjectPreview';

type ProjectsListProps = {
  projects: Project[];
};

export const ProjectsList = (props: ProjectsListProps): React.ReactElement => {
  const { projects } = props;

  const projectsElements = projects.map(project => (
    <ProjectPreview key={project.id} project={project} />
  ));

  return <Gallery>{projectsElements}</Gallery>;
};
