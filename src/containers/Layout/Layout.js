import React from "react";
import "./Layout.css";
import About from "../About/About";
import CV from "../CV/CV";
import Projects from "../Projects/Projects";
const Layout = (props) => {
  const { click } = props;
  return (
    <div className="Layout">
      <header className="Header">
        <nav>
          <div onClick={() => click(About)}>About me</div>
          <div onClick={() => click(Projects)}>Projects</div>
          <div onClick={() => click(CV)}>CV</div>
        </nav>
      </header>
      <main className="Main">{props.children}</main>
    </div>
  );
};

export default Layout;
