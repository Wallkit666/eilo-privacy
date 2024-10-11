import React, { useMemo } from 'react';

import ProjectPlatformView from "./project-platform.view"

const ProjectPlatformContainer = ({ ...props }) => {
  const items = useMemo(() => ([
    {
      title: 'Industry',
      value: props.data?.industry
    },
    {
      title: 'Team size',
      value: props.data?.team_size
    },
    {
      title: 'Duration',
      value: props.data?.duration
    },
    {
      title: 'BuDget',
      value: props.data?.budget
    },
    {
      title: 'Technologies',
      value: props.data?.technologies
    }
  ]), [props.data])

  return (
    <ProjectPlatformView {...props} items={items} />
  );
}

export default ProjectPlatformContainer;
