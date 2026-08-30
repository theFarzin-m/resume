import { Skill } from "@/types";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoMongodb, BiLogoRedux } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { IoGitBranchOutline } from "react-icons/io5";
import { PiHandSwipeRight } from "react-icons/pi";
import { RiBootstrapLine, RiJavascriptLine } from "react-icons/ri";
import {
  SiExpressdotcom,
  SiPostgresql,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";
import {
  TbApi,
  TbBrandCss3,
  TbBrandDjango,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandTypescript,
} from "react-icons/tb";

const skills: Skill[] = [
  {
    title: "JavaScript",
    level: 5,
    category: "Frontend",
    icon: RiJavascriptLine,
  },
  {
    title: "Next.js",
    level: 4,
    category: "Frontend",
    icon: TbBrandNextjs,
  },
  {
    title: "React",
    level: 5,
    category: "Frontend",
    icon: FaReact,
  },
  {
    title: "TypeScript",
    level: 4,
    category: "Frontend",
    icon: TbBrandTypescript,
  },
  {
    title: "Django",
    level: 4,
    category: "Backend",
    icon: TbBrandDjango,
  },
  {
    title: "Tailwind",
    level: 5,
    category: "Frontend",
    icon: SiTailwindcss,
  },
  {
    title: "React Router",
    level: 5,
    category: "Frontend",
    icon: SiReactrouter,
  },
  {
    title: "Redux",
    level: 5,
    category: "Frontend",
    icon: BiLogoRedux,
  },
  {
    title: "Rest API",
    level: 5,
    category: "Backend",
    icon: TbApi,
  },
  {
    title: "React Query",
    level: 5,
    category: "Frontend",
    icon: SiReactquery,
  },
  {
    title: "Bootstrap",
    level: 5,
    category: "Frontend",
    icon: RiBootstrapLine,
  },
  {
    title: "Styled Components",
    level: 4,
    category: "Frontend",
    icon: SiStyledcomponents,
  },
  {
    title: "Swiper",
    level: 4,
    category: "Frontend",
    icon: PiHandSwipeRight,
  },
  {
    title: "HTML",
    level: 5,
    category: "Frontend",
    icon: AiOutlineHtml5,
  },
  {
    title: "Git",
    level: 3,
    category: "DataBase & Tools",
    icon: IoGitBranchOutline,
  },
  {
    title: "Css",
    level: 5,
    category: "Frontend",
    icon: TbBrandCss3,
  },
  {
    title: "PostgreSQL",
    level: 3,
    category: "DataBase & Tools",
    icon: SiPostgresql,
  },
  {
    title: "MySQL",
    level: 3,
    category: "DataBase & Tools",
    icon: GrMysql,
  },
  {
    title: "MongoDB",
    level: 2,
    category: "DataBase & Tools",
    icon: BiLogoMongodb,
  },
  {
    title: "Node.js",
    level: 3,
    category: "Backend",
    icon: TbBrandNodejs,
  },
  {
    title: "React Hook Form",
    level: 4,
    category: "Frontend",
    icon: SiReacthookform,
  },
  {
    title: "Express.js",
    level: 2,
    category: "Backend",
    icon: SiExpressdotcom,
  },
  {
    title: "Python",
    level: 2,
    category: "Backend",
    icon: TbBrandPython,
  },
];

export default skills