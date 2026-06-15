import React, { lazy, useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import AOS from "aos";

const Title = lazy(() => import("./components/Title"));
const Skills = lazy(() => import("./components/Skills"));
const Project = lazy(() => import("./components/Project"));
const Seo = lazy(() => import("./components/Seo"));
const About = lazy(() => import("./components/About"));

import "./App.css";
import Taps from "./components/Taps";
import { FaArrowsSpin } from "react-icons/fa6";
import { VscHome } from "react-icons/vsc";
import { IoPersonOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TbArrowsExchange } from "react-icons/tb";
import { PiLaptop } from "react-icons/pi";

function App() {
  const [color, setColor] = useState("#black");
  const [background, setBackground] = useState("#ffffff");
  const [next, setNext] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });

  var i = next;
  const backgroundColors = [
    "#0093E9",
    "#85FFBD",
    "#FFBBEC",
    "#ffa26c",
    "#F4D03F",
    "#fff",
  ];
  const colors = ["#ccc", "#004080", "#333", "#004040", "#804000", "#000000"];

  const changetheme = () => {
    setColor(colors[i]);
    setBackground(backgroundColors[i]);
    document.documentElement.style.setProperty("--telegram-bg", "green");
    i++;
    if (i >= colors.length) {
      i = 0;
    }
    setNext(i);
  };

  document.body.style.backgroundColor = background;
  document.body.style.color = color;

  return (
    <div>
      <Snowfall
        color={color}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: "-1",
        }}
      />

      <Seo />
      <Taps>
        <Taps.Item
          className="bg-sky-300 hover:bg-sky-300"
          to="#"
          onClick={changetheme}
        >
          <TbArrowsExchange className="md:text-3xl text-lg" />
        </Taps.Item>

        <Taps.Item
          activeClass="text-blue-500 bg-blue-200"
          to="title"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-100}
        >
          <VscHome className="md:text-3xl md:block hidden" />
          Title
        </Taps.Item>
        <Taps.Item
          activeClass="text-blue-500 bg-blue-200"
          to="aboute"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-100}
        >
          <IoPersonOutline className="md:text-3xl md:block hidden" />
          Aboute me
        </Taps.Item>
        <Taps.Item
          activeClass="text-blue-500 bg-blue-200"
          to="skills"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-100}
        >
          <PiLaptop className="md:text-3xl md:block hidden" />
          Expert in
        </Taps.Item>

        <Taps.Item
          activeClass="text-blue-500 bg-blue-200"
          to="project"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-100}
        >
          <GoProjectSymlink className="md:text-3xl md:block hidden" />
          Projects
        </Taps.Item>
      </Taps>

      <div className="custom-full" id="title">
        <Title />
      </div>

      <div className="custom-full" id="aboute">
        <About />
      </div>

      <div className="custom-full" id="skills">
        <Skills />
      </div>
      <div className="custom-full" id="project">
        <Project />
      </div>
    </div>
  );
}

export default App;
