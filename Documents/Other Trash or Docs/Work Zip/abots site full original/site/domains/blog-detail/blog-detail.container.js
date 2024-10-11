import React, { useMemo } from "react";

import BlogDetailView from "./blog-detail.view";

import { API } from "@configs/api";

export default function BlogDetailContainer({ ...props }) {
  const markdown = useMemo(() => {
    return props.post?.attributes?.content?.replaceAll(
      "/uploads/",
      `${API}/uploads/`
    );
  }, [props.post]);

  return <BlogDetailView {...props} markdown={markdown} />;
}
