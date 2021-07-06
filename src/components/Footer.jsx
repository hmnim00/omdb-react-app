import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiWebpack, SiImdb } from "react-icons/si";
import { IoLogoSass } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="info">
          <p>Tecnologías utilizadas en este proyecto</p>
          <div className="tech__used">
            <SiWebpack />
            <RiReactjsLine />
            <IoLogoSass />
            <SiImdb />
          </div>
        </div>
        <div className="hmnim__info">&copy; 2021 | Manuel Flores</div>
      </div>
    </div>
  );
};

export default Footer;
