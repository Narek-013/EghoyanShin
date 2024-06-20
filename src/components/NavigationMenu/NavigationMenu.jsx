import React from "react";
import "./NavigationMenu.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { imgs } from "../../images/img";
import Hamburger from "hamburger-react";

const NavigationMenu = () => {
  const navigate = useNavigate();

  const changeLocation = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
    navigate("/");
  };
  const changeLocationAbout = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
    navigate("/about");
  };
  const changeLocationService = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
    navigate("/services");
  };

  return (
    <div className="NavigationMenu">
      <div className="container">
        <div className="NavMenu">
          <div className="LogoAndLinks">
            <Link
              to="/"
              onClick={changeLocation}
              spy={true}
              smooth={true}
              offset={-500}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <img src={imgs.logo} alt="#" />
            </Link>
            <div className="NavLinks">
              <Link
                style={{ cursor: "pointer" }}
                to="/"
                spy={true}
                smooth={true}
                offset={-500}
                duration={500}
                onClick={changeLocation}
              >
                Գլխավոր
              </Link>
              <Link
                to="/about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={changeLocationAbout}
                style={{ cursor: "pointer" }}
              >
                Մեր մասին
              </Link>
              <Link
                to="/services"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={changeLocationService}
                style={{ cursor: "pointer" }}
              >
                Ծառայություններ
              </Link>
            </div>
            <div className="hamburger">
              <Hamburger />
            </div>
          </div>
          <div className="NavConnect">
            <div className="mailDiv">
              <img src={imgs.mail} alt="mail img" />
              <p>eghoyan.shin@gmail.com</p>
            </div>
            <div className="numberBox">
              <img src={imgs.phone} alt="phone img" />
              <div className="numberDiv">
                <p>+374 (077) 299 561</p>
                <p>+374 (077) 299 561</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
