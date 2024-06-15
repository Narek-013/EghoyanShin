import React from "react";
import "./NavigationMenu.css";
import { Link } from "react-router-dom";
import logo from "../../images/png/Logo.png";
import phone from "../../images/png/phone.png";
import mail from "../../images/png/mail.png";

const NavigationMenu = () => {
  return (
    <div className="NavigationMenu">
      <div className="container">
        <div className="NavMenu">
          <div className="LogoAndLinks">
            <img src={logo} alt="" />
            <div className="NavLinks">
              <Link to="/">Գլխավոր</Link>
              <Link to="/">Մեր մասին</Link>
              <Link to="/">Ծառայություններ</Link>
            </div>
          </div>
          <div className="NavConnect">
            <div className="mailDiv">
              <img src={mail} alt="" />
              <p>eghoyan.shin@mail.ru</p>
            </div>
            <div className="numberBox">
              <img src={phone} alt="" />
              <div className="numberDiv">
                <p>+374-12-34-56-78</p>
                <p>+374-12-34-56-78</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
