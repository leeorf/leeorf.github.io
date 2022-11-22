import React from 'react';
import { FaGithub, FaPlay } from 'react-icons/fa';
import { Link } from '../../types/Link';
import { Project } from '../../types/Project';
import { idFromSetence } from '../../utils';
import { Button } from '../shared/Button';
import { Card } from '../shared/Card';
import { DateRange } from '../shared/DateRange';
import { FluidImage } from '../shared/FluidImage';
import { Row } from '../shared/Row';
import { Tags } from '../shared/Tags';

type ProjectPreviewProps = {
  project: Project;
};

export const ProjectPreview = (
  props: ProjectPreviewProps
): React.ReactElement => {
  const { project } = props;

  const projectTagsElement = project.tags?.length ? (
    <Tags tags={project.tags} numToShow={3} />
  ) : null;

  const projectDates = (
    <DateRange
      start={project.startDate}
      end={project.endDate}
      className="text-xs text-gray-500"
    />
  );

  const projectSummaryLines = project.summary?.length
    ? project.summary.map(summary => (
        <p key={idFromSetence(summary)} className="font-light">
          {summary}
        </p>
      ))
    : null;

  const projectSummary = projectSummaryLines ? (
    <div>{projectSummaryLines}</div>
  ) : null;

  const demoLink =
    project.demoUrl && !project.archived ? (
      <Button startAdornment={<FaPlay />} link={project.demoUrl}>
        Demo
      </Button>
    ) : null;

  const sourceCodeLink =
    project.srcUrl && !project.archived ? (
      <Button startAdornment={<FaGithub />} link={project.srcUrl}>
        Source Code
      </Button>
    ) : null;

  const projectCover = project.cover ? (
    <FluidImage image={project.cover} />
  ) : null;

  return (
    <Card.Root>
      <Card.Media link={project.srcUrl}>{projectCover}</Card.Media>
      <Card.Content className="space-y-2">
        <Card.Title link={project.srcUrl}>{project.name}</Card.Title>
        <Row>
          <div>{projectDates}</div>
        </Row>
        {projectSummary}
        {projectTagsElement}
      </Card.Content>
      <Card.Actions>
        {demoLink}
        {sourceCodeLink}
      </Card.Actions>
    </Card.Root>
  );
};
