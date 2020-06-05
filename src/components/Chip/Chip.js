import React from "react";
import "./Chip.css";
const Chip = (props) => {
  return (
    <div className="Chip">
      <h5>{props.text}</h5>
    </div>
  );
};

export default Chip;
