import React from "react";
import "./CardProject.css";
import { ButtonCode, ButtonWeb } from "../Button/Button";
import Chip from "../Chip/Chip";
const Card = (props) => {
  const { title, description, image, codeUrl, projectUrl, technologies } = props;
  return (
    <div className="Card">
      <section className="Card-Main">
        <div className="Card-Image">
          <img alt="" src={image} />
        </div>
        <div className="Card-Content">
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>

          <div classname="Card-Chips">
            {technologies.map((text) => (
              <Chip text={text} />
            ))}
          </div>
        </div>
        <div className="Card-Actions">
          <ButtonCode page={codeUrl} />
          <ButtonWeb page={projectUrl} />
        </div>
      </section>
    </div>
  );
};

export default Card;
