import Card from "./Card";

import "./Skills.css";

import data from "../data.json";

export default function Skills() {
  return (
    <div className="container overflow-hidden">
      <div className="fw-bold fs-3 mb-3"> expert in </div>
      <div className="card-component row row-cols-2 row-cols-sm-4 row-cols-md-5">
        {data.skills.map((skill) => (
          <Card title={skill.title} level={5} key={skill.title} />
        ))}
      </div>
    </div>
  );
}
