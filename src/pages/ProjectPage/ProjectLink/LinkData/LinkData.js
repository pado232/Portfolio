import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

export const linkData1 = [
  {
    srcOrIcon: "/images/RealMomentLogo.png",
    linkUrl: "https://real-moment.kro.kr/",
    isIcon: false,
  },
  {
    srcOrIcon: <FaGithub size={35} />,
    linkUrl: "https://github.com/pado232/RealMoment",
    isIcon: true,
  },
  {
    srcOrIcon: <SiNotion size={35} />,
    linkUrl:
      "https://www.notion.so/ShoppingMall-83cac7f2de6f47b48037173179d5c961",
    isIcon: true,
  },
];

export const linkData2 = [
  {
    srcOrIcon: "/images/AnotherLogo.png",
    linkUrl: "https://another-link.kro.kr/",
    isIcon: false,
  },
  {
    srcOrIcon: <FaGithub size={35} />,
    linkUrl: "https://github.com/pado232/AnotherProject",
    isIcon: true,
  },
  {
    srcOrIcon: <SiNotion size={35} />,
    linkUrl: "https://www.notion.so/AnotherProject",
    isIcon: true,
  },
];
