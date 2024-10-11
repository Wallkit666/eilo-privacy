import React, { useCallback, useState, useMemo } from "react";

import HomeSliderView from "./home-slider.view";

import useModal from "@hooks/useModal";

import { useRouter } from "next/router";

const HomeSliderContainer = ({ data, ...props }) => {
  const router = useRouter();

  const [active, setActive] = useState(0);

  const { onOpenModal } = useModal(router);

  const items = useMemo(() => {
    const res = [
      {
        id: "custom",
        attributes: {
          title: "Full-cycle development company with huge stack",
          // (
          //   <span>
          //     Your business is unique - we know how to make it more{" "}
          //     <TextTexture width={387} height={16} IconComponent={TextureSVG}>
          //       competitive
          //     </TextTexture>
          //   </span>
          // ),
          description: "Your business is unique - we know how to make it more",
          preview: "/images/home/preview.svg",
          isEstimate: true,
          size: "large",
        },
      },
    ];

    res.push(...data);

    return res;
  }, [data]);

  const arrowMeta = useMemo(() => {
    if (active == 0) {
      return {
        prev: data[data.length - 1].attributes?.name,
        next: data[active]?.attributes?.name,
      };
    }

    let prevIndex = active - 1;

    if (prevIndex === -1) {
      prevIndex = data?.length - 1;
    }

    return {
      prev: data[active - 2]?.attributes?.name,
      next: data[active]?.attributes?.name,
    };
  }, [active, data]);

  const handleMoved = useCallback((splide, newIndex) => {
    setActive(newIndex);
  }, []);

  return (
    <HomeSliderView
      {...props}
      data={data}
      items={items}
      arrowMeta={arrowMeta}
      onMoved={handleMoved}
      onOpenModal={onOpenModal}
    />
  );
};

export default HomeSliderContainer;
