import { useEffect, useState } from "react";

import data from "../data.json";

import "./About.css";

export default function About() {
  const [lang, setLang] = useState("en");
  return (
    <div className="container" data-aos="zoom-out">
      <div className={`fs-3 fw-bold mb-3 ${lang} `}>
        {data.about[lang].title}
      </div>

      <div className={`mx-5 lh-lg fs-5 ${lang}`}>
        <p>{data.about[lang].content}</p>
      </div>

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
