import React from "react";
import { Link } from "react-scroll";

import data from "../data.json";

import "./Project.css";

export default function Project() {
  const showTools = (tools) => {
    const used = document.querySelectorAll(".used");
    
    if (used) {
      used.forEach(u => {
        u.classList.remove("used")
      })
    }

    tools.map((t) => {
      const el = document.getElementById(`#${t}`);
      if (el) {
        el.classList.add("used");
      }
    });
  };

  return (
    <div className="container my-5 project-component" id="projects">
      <div className="row">
        <div className="col-12">
          <div className="fw-bold fs-4 text-center mb-3">Projects :</div>
        </div>
        {data.map((perview) => (
          <div className="col d-flex justify-content-center" key={perview.id}>
            <div className="custom-card p-2">
              <h4> {perview.title}</h4>
              <Link
                to="skills"
                smooth={true}
                duration={200}
                offset={-100}
                className="custom-button bg-info-subtle border border-info text-secondary"
                onClick={() => showTools(perview.tools)}
              >
                show tools used
              </Link>
              {perview.perview && (
                <a
                  href={perview.perview}
                  target="_blank"
                  className="custom-button"
                >
                  Preview
                </a>
              )}
              {perview.video && (
                <a
                  target="_blank"
                  href={perview.video}
                  className="custom-button"
                >
                  video
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
