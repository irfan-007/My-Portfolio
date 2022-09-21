import React from "react";
import "./Header.css";
import Cta from "./Cta";
import ME from "../../assets/img05.png";
import Hsocial from "./HeaderSocials";
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Muhammed Irfan</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />
        <Hsocial />
        <div className="me">
          <img className="me-img" src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
