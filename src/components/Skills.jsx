import React from "react";
import { RiJavascriptLine, RiBootstrapLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiStyledcomponents,
  SiReactquery,
  SiReactrouter,
  SiReacthookform,
  SiPostgresql,
  SiExpressvpn,
} from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  TbBrandCss3,
  TbBrandPython,
  TbBrandDjango,
  TbBrandNodejs,
  TbBrandNextjs,
  TbApi,
  TbBrandTypescript,
} from "react-icons/tb";
import { IoGitBranchOutline } from "react-icons/io5";
import { BiLogoRedux, BiLogoMongodb } from "react-icons/bi";
import { PiHandSwipeRight } from "react-icons/pi";
import { GrMysql } from "react-icons/gr";

import Card from "./Card";

import "./Skills.css";

export default function Skills() {
  return (
    <div className="container overflow-hidden">
      <div className="fw-bold fs-3 mb-3"> expert in </div>
      <div className="card-component row row-cols-2 row-cols-sm-4 row-cols-md-5">
        <Card
          title="JavaScript"
          icon={<RiJavascriptLine fontSize="60px" />}
          level={5}
        />
        <Card title="React" icon={<FaReact fontSize="60px" />} level={5} />
        <Card
          title="HTML"
          icon={<AiOutlineHtml5 fontSize="60px" />}
          level={5}
        />
        <Card
          title="Git"
          icon={<IoGitBranchOutline fontSize="60px" />}
          level={5}
        />
        <Card title="Css" icon={<TbBrandCss3 fontSize="60px" />} level={5} />
        <Card
          title="React Router"
          icon={<SiReactrouter fontSize="60px" />}
          level={5}
        />
        <Card title="Redux" icon={<BiLogoRedux fontSize="60px" />} level={5} />
        <Card title="Rest API" icon={<TbApi fontSize="60px" />} level={5} />
        <Card
          title="React Quary"
          icon={<SiReactquery fontSize="60px" />}
          level={5}
        />
        <Card
          title="Bootstrap"
          icon={<RiBootstrapLine fontSize="60px" />}
          level={5}
        />
        <Card
          title="Styled Components"
          icon={<SiStyledcomponents fontSize="60px" />}
          level={5}
        />
        <Card
          title="Swiper"
          icon={<PiHandSwipeRight fontSize="60px" />}
          level={5}
        />
        <Card
          title="Postgre SQL"
          icon={<SiPostgresql fontSize="60px" />}
          level={5}
        />
        <Card title="Mysql" icon={<GrMysql fontSize="60px" />} level={5} />
        <Card
          title="MongoDb"
          icon={<BiLogoMongodb fontSize="60px" />}
          level={5}
        />

        <Card
          title="Node js"
          icon={<TbBrandNodejs fontSize="60px" />}
          level={4}
        />

        <Card
          title="React hook Form"
          icon={<SiReacthookform fontSize="60px" />}
          level={4}
        />

        <Card
          title="Django"
          icon={<TbBrandDjango fontSize="60px" />}
          level={4}
        />

        <Card
          title="Tailwind"
          icon={<SiTailwindcss fontSize="60px" />}
          level={3}
        />

        <Card
          title="Next js"
          icon={<TbBrandNextjs fontSize="60px" />}
          level={3}
        />
        <Card
          title="Express js"
          icon={<SiExpressvpn fontSize="60px" />}
          level={2}
        />
        <Card
          title="Python"
          icon={<TbBrandPython fontSize="60px" />}
          level={2}
        />
        <Card
          title="Typescript"
          icon={<TbBrandTypescript fontSize="60px" />}
          level={2}
        />
      </div>
    </div>
  );
}
