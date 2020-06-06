import React from "react";
import { FaFile, FaGithub } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import "./Button.css";
import Pdf from "../../assets/cv.pdf";

export const ButtonCV = () => {
  return (
    <a href={Pdf} className="Button ButtonPaper" target="_blank" rel="noopener noreferrer">
      <FaFile />
      <span>CV</span>
    </a>
  );
};

export const ButtonCode = (props) => (
  <a href={props.page} className="Button ButtonCode" target="_blank" rel="noopener noreferrer">
    <FaGithub />
  </a>
);

export const ButtonWeb = (props) => {
  return (
    <a href={props.page} className="Button ButtonPaper" target="_blank" rel="noopener noreferrer">
      <IoIosGlobe />
    </a>
  );
};

export const ButtonMedia = (props) => {
  return (
    <a href={props.page} className="ButtonMedia" target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
};
