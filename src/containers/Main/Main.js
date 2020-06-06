import React from "react";
import { ButtonMedia } from "../../components/Button/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import meImage from "../../assets/me.jpg";
import "./Main.css";
const Main = () => {
  return (
    <div className="Main-Container">
      <div className="Image-Container">
        <img alt="profile" src={meImage} />
      </div>
      <div className="Info-Container">
        <div>
          <h2>Natalia Goska</h2>
          <h3>
            email: <span>natalia.goska@gmail.com</span>
          </h3>
          <p>Originally from Poland, currently in Brazil.</p>
          <p>Looking for new opportunieties as Frontend Develper in React.js</p>
        </div>
        <div className="Media-Buttons">
          <ButtonMedia>
            <FaGithub />
          </ButtonMedia>
          <ButtonMedia>
            <FaLinkedin />
          </ButtonMedia>
        </div>
      </div>
    </div>
  );
};

export default Main;
