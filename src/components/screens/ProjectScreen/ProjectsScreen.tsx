import React, { useState } from 'react';
import { Project } from '../../types/Project';
import { ProjectsList } from '../elements/ProjectsList';
import { PageLayout } from '../layout/PageLayout';
import { Badge } from '../shared/Badge';
import { PageHeader } from '../shared/PageHeader';
import { Row } from '../shared/Row';
import { projectsSorters, SortBy } from './ProjectScreen/ProjectScreen.helpers';

type ProjectsScreenProps = {
  projects: Project[];
};

export const ProjectsScreen = (
  props: ProjectsScreenProps
): React.ReactElement => {
  const { projects } = props;
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortBy = event.target.value as SortBy;

    const sortedProjects = [...filteredProjects].sort(
      projectsSorters[sortBy].sort
    );

    setFilteredProjects(sortedProjects);
  };

  const numOfProjects = filteredProjects.length;

  return (
    <PageLayout>
      <Row>
        <PageHeader>Projetos</PageHeader>
        <Badge className="ml-3 self-start">{numOfProjects}</Badge>
      </Row>

      <div>
        <select onChange={handleSort}>
          {Object.keys(SortBy).map(sortOption => (
            <option key={sortOption} value={sortOption}>
              {SortBy[sortOption as keyof typeof SortBy]}
            </option>
          ))}
        </select>
      </div>
      <hr />
      <ProjectsList projects={filteredProjects} />
    </PageLayout>
  );
};
