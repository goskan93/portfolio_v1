import React from "react";
import "./CardProject.css";
import { ButtonCode, ButtonWeb } from "../Button/Button";
import Chip from "../Chip/Chip";
const Card = (props) => {
  const { title, description, image, codeUrl, projectUrl } = props;
  return (
    <div className="Card">
      <section className="Card-Main">
        <div className="Card-Image">
          <img alt="" />
        </div>
        <div className="Card-Content">
          {/* <h1>{title}</h1> */}
          {/* <h6>data</h6> */}
          {/* <p>{description}</p> */}
          <h1>fsdfds</h1>
          <p>
            dsdsfdsaffffffffffffffffffffdsfds fadsf sadf fdsa fd dsdsfdsaffffffffffffffffffffdsfds fadsf sadf fdsa fd
            dsdsfdsaffffffffffffffffffffdsfds fadsf sadf fdsa fd
          </p>
          <div classname="Card-Chips">
            <Chip text="React" />
            <Chip text="React" />
            <Chip text="React" />
          </div>
        </div>
        <div className="Card-Actions">
          <ButtonCode />
          <ButtonWeb />
        </div>
      </section>
    </div>
  );
};

export default Card;
