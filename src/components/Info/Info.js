import React from "react";

const Info = (props) => {
  return (
    <div>
      <h2 style={{ marginBottom: "0.5rem", marginTop: "1.5rem" }}>{props.title}</h2>
      <hr />
      {props.children}
    </div>
  );
};

export default Info;
