import React, { useState, useMemo, useEffect } from 'react';

import ProjectView from "./project.view"

import { find } from "lodash"

const ProjectContainer = ({ ...props }) => {
  const [activeProgectId, setActiveProgectId] = useState(props.data?.progects[0]?.id);

  const activeProgect = useMemo(() => {
    return find(props.data?.progects, { id: activeProgectId })
  }, [activeProgectId, props.data])

  useEffect(() => {
    setActiveProgectId(props.data?.progects[0]?.id)
  }, [props.data?.progects[0]?.id])

  return (
    <ProjectView {...props} activeProgect={activeProgect} activeProgectId={activeProgectId} onChangeActiveProgectId={setActiveProgectId} />
  );
}

export default ProjectContainer;
