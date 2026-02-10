// @ts-nocheck
import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";

import "./Title.css";
import { ReactTyped } from "react-typed";

export default function Title() {
  return (
    <div className="conatiner px-2">
      <h1 className="title" data-aos="zoom-in">
    <ReactTyped strings={["Hello", "I'm Farzin Abbasi", "Farzin'm"]} typeSpeed={50} backSpeed={30} backDelay={1200} startDelay={500} />
        
      </h1>
      <h2
        className="fs-5 mt-4 mb-3 text-secondary text-center text-sm-end"
        data-aos="zoom-in"
      >
        Crafting Clean Code and Creative Design in React
      </h2>
      <div className="custom-icons-wrapper" data-aos="flip-right">
        <a
          href="https://t.me/farzin_man"
          target="_blank"
          rel="noreferrer"
          className="custom-social-button"
        >
          <div>
            <span style={{ backgroundColor: "#24A1DE" }}>
              <FaTelegramPlane color="#fff" />
            </span>
          </div>
          <div style={{ backgroundColor: "#fff" }}>
            <span>
              <FaTelegramPlane color="#24A1DE" />
            </span>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/farzinabbasi/"
          className="custom-social-button mx-2"
          target="_blank"
          rel="noreferrer"
        >
          <div style={{ backgroundColor: "#fff" }}>
            <span>
              <FaLinkedinIn color="#0072d1" />
            </span>
          </div>
          <div style={{ backgroundColor: "#0072d1" }}>
            <span>
              <FaLinkedinIn color="#fff" />
            </span>
          </div>
        </a>

        <a
          href="https://github.com/theFarzin-m"
          className="custom-social-button"
          target="_blank"
          rel="noreferrer"
        >
          <div style={{ backgroundColor: "#000" }}>
            <span>
              <PiGithubLogoFill color="#fff" />
            </span>
          </div>
          <div style={{ backgroundColor: "#fff" }}>
            <span>
              <PiGithubLogoFill color="#000" />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
