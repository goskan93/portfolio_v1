import React from "react";
import "./Layout.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Pdf from "../../assets/cv.pdf";

const Layout = (props) => {
  const { click } = props;
  return (
    <div className="Layout">
      <header className="Header">
        <nav>
          <div onClick={() => click(About)}>About me</div>
          <div onClick={() => click(Projects)}>Projects</div>
          <a href={Pdf} target="_blank" rel="noopener noreferrer">
            CV
          </a>
        </nav>
      </header>
      <main className="Main">{props.children}</main>
    </div>
  );
};

export default Layout;
