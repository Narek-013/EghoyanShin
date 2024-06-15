import { Link } from "react-router-dom";
import "./footer.css";
import { imgs } from "../../images/img";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container items">
        <Link to="/">
          <img
            style={{ cursor: "pointer" }}
            width={110}
            src={imgs.logo}
            alt=""
          />
        </Link>
        <div className="firstPart">
          <div className="footerText">
            <div className="pagesItems">
              <Link>Մոնտաժ/ԴեՄոնտաժ</Link>
              <Link>Քանդման Աշխատանքներ</Link>
            </div>
            <div className="pagesItems">
              <Link>Աղբի եվ ՇինԱղբի Տեղափոխում</Link>
              <Link>Վերանորոգման Աշխատանքներ</Link>
            </div>
            <div className="pagesItems">
              <Link>Սպիտակ Ավազ</Link>
              <Link>Բանվորական ՈՒժ</Link>
            </div>
          </div>
        </div>
        <div className="secondPart">
          <Link to="">
            <img width={30} src={imgs.tiktok} alt="" />
          </Link>
          <Link to="">
            <img width={30} src={imgs.instagram} alt="" />
          </Link>
          <Link to="">
            <img width={35} src={imgs.whatsApp} alt="" />
          </Link>
          <Link to="">
            <img width={35} src={imgs.viber} alt="" />
          </Link>
        </div>
      </div>
      <div className="footerBottom container">
        <div className="backInfo">
          <p style={{ fontSize: "15px", opacity: 1 }}>Հետադարձ Կապ</p>
          <p>egohyan.shin@gmail.com</p>
        </div>
        <div className="secondPart1">
          <Link to="">
            <img width={30} src={imgs.tiktok} alt="" />
          </Link>
          <Link to="">
            <img width={30} src={imgs.instagram} alt="" />
          </Link>
          <Link to="">
            <img width={35} src={imgs.whatsApp} alt="" />
          </Link>
          <Link to="">
            <img width={35} src={imgs.viber} alt="" />
          </Link>
        </div>
        <div className="backInfo">
          <p>+374 (077) 299 561</p>
          <p>+374 (077) 299 561</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
