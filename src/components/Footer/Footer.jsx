import "./footer.css";
import { imgs } from "../../images/img";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const Footer = () => {
  const navigate = useNavigate();

  const changeLocations = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
    navigate("/");
  };

  const changeLocation1 = (num) => {
    window.scrollTo({ behavior: "smooth", top: 0 });
    navigate(`/services/${num}`);
  };

  return (
    <div className="footer">
      <div className="container items">
        <Link to="/" spy={true} smooth={true} offset={-500} duration={500} onClick={changeLocations}>
          <img style={{ cursor: "pointer" }} width={100} src={imgs.logo} alt="" />
        </Link>
        <div className="firstPart">
          <div className="footerText">
            <div className="pagesItems">
              <Link to="/services/1" onClick={() => changeLocation1(1)}>
                Մոնտաժ/ԴեՄոնտաժ
              </Link>
              <Link to="/services/2" onClick={() => changeLocation1(2)}>
                Քանդման Աշխատանքներ
              </Link>
            </div>
            <div className="pagesItems">
              <Link to="/services/3" onClick={() => changeLocation1(3)}>
                Աղբի եվ ՇինԱղբի Տեղափոխում
              </Link>
              <Link to="/services/4" onClick={() => changeLocation1(4)}>
                Վերանորոգման Աշխատանքներ
              </Link>
            </div>
            <div className="pagesItems">
              <Link to="/services/5" onClick={() => changeLocation1(5)}>
                Սպիտակ Ավազ
              </Link>
              <Link to="/services/6" onClick={() => changeLocation1(6)}>
                Բանվորական ՈՒժ
              </Link>
            </div>
          </div>
        </div>
        <div className="secondPart">
          <NavLink to="https://www.tiktok.com/@eghoyan_shin?_t=ZS-8zhNu6Wcjz7&_r=1" target="blank">
            <img width={30} src={imgs.tiktok} alt="Tik Tok img" />
          </NavLink>
          <NavLink
            to="https://www.instagram.com/eghoyan_shin?fbclid=IwZXh0bgNhZW0CMTAAAR3hNDNaQH02JAOTkFE43Z5inVrwDfDqLzNOAQ2PdQccGx_MMv4ghi_RiKA_aem_ZmFrZWR1bW15MTZieXRlcw"
            target="blank"
          >
            <img width={30} src={imgs.instagram} alt="Instagram img" />
          </NavLink>
          <NavLink target="blank" to="https://www.facebook.com/people/Eghoyan-Shin/61565982871267/?mibextid=ZbWKwL">
            <img width={30} src={imgs.faceBook} alt="facebook Img" />
          </NavLink>
          <a href="https://wa.me/77299561?text=Hello%20World">
            <img width={35} src={imgs.whatsApp} alt="WhatsApp img" />
          </a>
          <a href="viber://chat?number=%2B37477299561">
            <img width="35" src={imgs.viber} alt="Viber img" />
          </a>
        </div>
      </div>
      <div className="footerBottom container">
        <div className="backInfo">
          <p style={{ fontSize: "15px", opacity: 1 }}>Հետադարձ Կապ</p>
          <a href="mailto:eghoyan.shin@gmail.com">eghoyan.shin@gmail.com</a>
        </div>
        <div className="secondPart1">
          <NavLink to="https://www.tiktok.com/@eghoyan_shin?_t=ZS-8zhNu6Wcjz7&_r=1" target="blank">
            <img width={30} src={imgs.tiktok} alt="Tik Tok img" />
          </NavLink>
          <NavLink
            target="blank"
            to="https://www.instagram.com/eghoyan_shin?fbclid=IwZXh0bgNhZW0CMTAAAR3hNDNaQH02JAOTkFE43Z5inVrwDfDqLzNOAQ2PdQccGx_MMv4ghi_RiKA_aem_ZmFrZWR1bW15MTZieXRlcw"
          >
            <img width={30} src={imgs.instagram} alt="Instagram Img" />
          </NavLink>
          <NavLink target="blank" to="https://www.facebook.com/people/Eghoyan-Shin/61565982871267/?mibextid=ZbWKwL">
            <img width={30} src={imgs.faceBook} alt="facebook Img" />
          </NavLink>
          <a href="https://wa.me/77299561?text=Բարև%20ձեզ">
            <img width={35} src={imgs.whatsApp} alt="WhatsApp img" />
          </a>
          <a href="viber://chat?number=%2B37477299561">
            <img width="35" src={imgs.viber} alt="Viber img" />
          </a>
        </div>
        <div className="backInfo">
          <a href="tel:+37455290561">+374 55 290 561</a>
          <a href="tel:+37477299561">+374 77 299 561</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
