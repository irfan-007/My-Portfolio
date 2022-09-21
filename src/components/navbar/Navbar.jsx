import React, { useState } from "react";
import "./Navbar.css";
import {
  AiOutlineMessage,
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineBook,
} from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";

function Navbar() {
  const [active, setactive] = useState("#");
  return (
    <nav>
      <a
        className={active === "#" ? "active" : ""}
        href="#"
        onClick={() => setactive("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        className={active === "#about" ? "active" : ""}
        href="#about"
        onClick={() => setactive("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        className={active === "#experience" ? "active" : ""}
        href="#experience"
        onClick={() => setactive("#experience")}
      >
        <AiOutlineBook />
      </a>
      <a
        className={active === "#service" ? "active" : ""}
        href="#service"
        onClick={() => setactive("#service")}
      >
        <RiServiceLine />
      </a>
      <a
        className={active === "#contact" ? "active" : ""}
        href="#contact"
        onClick={() => setactive("#contact")}
      >
        <AiOutlineMessage />
      </a>
    </nav>
  );
}

export default Navbar;
