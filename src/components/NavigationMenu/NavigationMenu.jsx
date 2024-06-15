import React from "react";
import "./NavigationMenu.css";
import { Link } from "react-router-dom";
import { imgs } from "../../images/img";

const NavigationMenu = () => {
  return (
    <div className="NavigationMenu">
      <div className="container">
        <div className="NavMenu">
          <div className="LogoAndLinks">
            <Link to="/">
              <img src={imgs.logo} alt="#" />
            </Link>
            <div className="NavLinks">
              <Link to="/">Գլխավոր</Link>
              <Link to="/about">Մեր մասին</Link>
              <Link to="/services">Ծառայություններ</Link>
            </div>
          </div>
          <div className="NavConnect">
            <div className="mailDiv">
              <img src={imgs.mail} alt="" />
              <p>eghoyan.shin@mail.ru</p>
            </div>
            <div className="numberBox">
              <img src={imgs.phone} alt="" />
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
