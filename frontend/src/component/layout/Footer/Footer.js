import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App For Anroid And IOS Mobile Phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Sellit</h1>
        <p>High Quality is our first priority</p>
        <p>Copyright 2022 &copy; Sellit</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/samaanBecho">Instagram</a>
        <a href="http://youtube.com/samaanBecho">Youtube</a>
        <a href="http://facebook.com/samaanBecho">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
