import React, { useMemo } from "react";

import BlogStrengthsView from "./blog-strengths.view";

export default function BlogStrengthsContainer({ data, ...props }) {
  const renderData = useMemo(() => {
    const res = {
      large: data?.slice(0, 3),
      other: data,
      list: data?.slice(19, 27),
    };

    return res;
  }, [data]);

  return <BlogStrengthsView {...props} data={renderData} />;
}
