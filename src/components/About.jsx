import { useState } from "react";
import { LiquidGlass } from '@liquidglass/react';

import data from "../data.json";

import "./About.css";



    

export default function About() {
  const [lang, setLang] = useState("en");
  return (
    <div className="container" data-aos="zoom-out" id="about">
      <LiquidGlass
        borderRadius={20}
        blur={2}
        contrast={0.99}
        brightness={1}
        saturation={1}
        Elasticity={0.5}
        className={`about-card ${lang}`}
      >
        
        <div className="about-inner">
          <div className="en-content">
            <div className="fs-3 fw-bold mb-3">{data.about.en.title}</div>
            <div className="mx-5 lh-lg fs-5">
              <p>{data.about.en.content}</p>
            </div>
          </div>

          <div className="fa-content">
            <div className="fs-3 fw-bold mb-3">{data.about.fa.title}</div>
            <div className="mx-5 lh-lg fs-5">
              <p>{data.about.fa.content}</p>
            </div>
          </div>
        </div>
      </LiquidGlass>
     

      <div className="d-flex justify-content-center mt-4">
        <button
          className={`btn lang-button mx-2 ${lang == "fa" ? "active" : ""}`}
          onClick={() => setLang("fa")}
        >
          Fa
        </button>
        <button
          className={`btn lang-button mx-2 ${lang == "en" ? "active" : ""}`}
          onClick={() => setLang("en")}
        >
          En
        </button>
      </div>
    </div>
  );
}
