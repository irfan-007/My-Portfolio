import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Muhammed Irfan
      </a>
      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://instagram.com">
          <GrInstagram />
        </a>
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://twitter.com">
          <FaTwitterSquare />
        </a>
      </div>
      <div className="footer__copyright">
        <small> &copy; muhammed irfan, All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
