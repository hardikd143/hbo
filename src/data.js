import {
  RiMotorbikeLine,
  RiMentalHealthLine,
  RiGuideLine,
  RiHealthBookLine,
} from "react-icons/ri";
import { AiOutlineCar } from "react-icons/ai";
import { MdOutlineArticle } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
import React from "react";
const sublinks = [
  {
    page: "products",
    links: [
      { label: "car insurance", icon: <AiOutlineCar />, url: "/car-insurance" },
      {
        label: "bike insurance",
        icon: <RiMotorbikeLine />,
        url: "/bike-insurance",
      },
      {
        label: "health insurance",
        icon: <RiMentalHealthLine />,
        url: "/health-insurance",
      },
      {
        label: "arogya sanjeevani",
        icon: <RiHealthBookLine />,
        url: "/arogya-sanjeevani",
      },
    ],
  },
  {
    page: "resources",
    links: [
      { label: "all resources", icon: <BiBookContent />, url: "/resources" },
      { label: "guides", icon: <RiGuideLine />, url: "/guides" },
      { label: "articles", icon: <MdOutlineArticle />, url: "/articles" },
    ],
  },
];

export default sublinks;
