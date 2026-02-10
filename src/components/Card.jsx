import React from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

import "./Card.css";
import { iconMap } from "./Iconmap";
import { PiEmptyBold } from "react-icons/pi";

export default function Card({ title, level }) {
  let emtStars = 5 - level;
  const cssID = title.toLowerCase().replaceAll(" ", "-");

  const Icon = iconMap[title] || PiEmptyBold;

  return (
    <div
      className="col d-flex justify-content-center"
      data-aos="fade-up"
      id={cssID}
    >
      <div className="custom-card p-2">
        <div className="image-wrapper text-center">
          <Icon fontSize="60px" />
        </div>
        <div className="skill-title-wrapper">
          <h4> {title} </h4>
          {level && (
            <div className="d-flex justify-content-center align-items-center">
              {[...Array(level)].map((s, i) => (
                <span key={i}>
                  <IoIosStar color="gold" fontSize="20px" />
                </span>
              ))}
              {[...Array(emtStars)].map((s, i) => (
                <span key={i}>
                  <IoIosStarOutline color="#787878" fontSize="20px" />
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
