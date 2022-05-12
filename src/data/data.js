import {
  RiMotorbikeLine,
  RiMentalHealthLine,
  RiGuideLine,
  RiHealthBookLine,
  AiOutlineCar,
  MdOutlineArticle,
  BiBookContent,
  BiBook,
} from "../icons";
import React from "react";
const sublinks = [
  {
    page: "products",
    links: [
      { label: "car insurance", icon: <AiOutlineCar />, url: "car-insurance" },
      {
        label: "bike insurance",
        icon: <RiMotorbikeLine />,
        url: "two-wheeler-insurance",
      },
      {
        label: "health insurance",
        icon: <RiMentalHealthLine />,
        url: "health-insurance",
      },
      {
        label: "group health insurance",
        icon: <RiHealthBookLine />,
        url: "group-health-insurance",
      },
    ],
  },
  {
    page: "resources",
    links: [
      {
        label: "all resources",
      type: `resources`,
        icon: <BiBookContent />,
        url: "resources",
      },
      {
        label: "guides",
        type: `guides`,
        icon: <RiGuideLine />,
        url: "guides",
      },
      {
        label: "articles",
        type: `articles`,
        icon: <MdOutlineArticle />,
        url: "articles",
      },
      { label: "ebooks", type: `ebooks`, icon: <BiBook />, url: "ebooks" },
    ],
  },
];

export default sublinks;
