import { Link } from "react-router-dom";
import "./footer.css";
import { imgs } from "../../images/img";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container items">
        <img
          width={110}
          src={imgs.logo}
          alt=""
        />
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
        <div className="secontPart">
          <Link to="">
            <img
              width={30}
              src={imgs.tiktok}
              alt=""
            />
          </Link>
          <Link to="">
            <img
              width={30}
              src={imgs.instagram}
              alt=""
            />
          </Link>
          <Link to="">
            <img
              width={35}
              src={imgs.whatsApp}
              alt=""
            />
          </Link>
          <Link to="">
            <img
              width={35}
              src={imgs.viber}
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="footerBottom container">
        <div className="backInfo">
          <p>Հետադարձ Կապ</p>
          <Link>eghoyan.shin@mail.ru</Link>
        </div>
        <div className="backInfo">
          <Link>+374 (077) 299 561</Link>
          <Link>+374 (077) 299 561</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
