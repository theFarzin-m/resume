"use client";

import { Tabs, TabItem } from "@/components/Tabs";

import { TbArrowsExchange } from "react-icons/tb";
import { VscHome } from "react-icons/vsc";
import { IoPersonOutline } from "react-icons/io5";
import { PiLaptop } from "react-icons/pi";
import { GoProjectSymlink } from "react-icons/go";
import { useThemeContext } from "./Snowfall";

export default function Navbar() {
  const { changeTheme } = useThemeContext();

  return (
    <nav className="sticky top-5 z-10000">
      <Tabs>
        <TabItem
          className="bg-sky-300 hover:bg-sky-300"
          to="#"
          onClick={changeTheme}
        >
          <TbArrowsExchange className="md:text-3xl text-lg" />
        </TabItem>

        <TabItem
          activeClass="text-blue-500 bg-blue-200"
          to="title"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-100}
        >
          <VscHome className="md:text-3xl md:block hidden" />
          Title
        </TabItem>
        <TabItem
          activeClass="text-blue-500 bg-blue-200"
          to="about"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-100}
        >
          <IoPersonOutline className="md:text-3xl md:block hidden" />
          About me
        </TabItem>
        <TabItem
          activeClass="text-blue-500 bg-blue-200"
          to="skills"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-100}
        >
          <PiLaptop className="md:text-3xl md:block hidden" />
          Expert in
        </TabItem>

        <TabItem
          activeClass="text-blue-500 bg-blue-200"
          to="projects"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-100}
        >
          <GoProjectSymlink className="md:text-3xl md:block hidden" />
          Projects
        </TabItem>
      </Tabs>
    </nav>
  );
}
