import React, { lazy, useEffect, useState } from "react";
import Snowfall from "react-snowfall";
import AOS from "aos";


const Title = lazy(() => import("./components/Title"));
const Skills = lazy(() => import("./components/Skills"));
const Project = lazy(() => import("./components/Project"));
const Seo = lazy(() => import("./components/Seo"));
const NavBar = lazy(() => import("./components/NavBar"));
const About = lazy(() => import("./components/About"));


// import Title from "./components/Title";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Project from "./components/Project";
// import Seo from "./components/Seo";
// import NavBar from "./components/NavBar";
import "./App.css";

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
        <NavBar changetheme={changetheme} />

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
