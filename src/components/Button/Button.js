import React from "react";
import { FaFile, FaGithub } from "react-icons/fa";
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

export const ButtonCode = () => (
  <a href="/" className="Button ButtonCode">
    <FaGithub />
    <span>Code</span>
  </a>
);
