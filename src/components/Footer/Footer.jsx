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

  const changeLocation1 = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };


  return (
    <div className="footer">
      <div className="container items">
        <Link
          to="/"
          spy={true}
          smooth={true}
          offset={-500}
          duration={500}
          onClick={changeLocations}
        >
          <img
            style={{ cursor: "pointer" }}
            width={100}
            src={imgs.logo}
            alt=""
          />
        </Link>
        <div className="firstPart">
          <div className="footerText">
            <div className="pagesItems">
              <Link to="/services/1" onClick={changeLocation1}>Մոնտաժ/ԴեՄոնտաժ</Link>
              <Link to="/services/2" onClick={changeLocation1}>Քանդման Աշխատանքներ</Link>
            </div>
            <div className="pagesItems">
              <Link to="/services/3" onClick={changeLocation1}>Աղբի եվ ՇինԱղբի Տեղափոխում</Link>
              <Link to="/services/4" onClick={changeLocation1}>Վերանորոգման Աշխատանքներ</Link>
            </div>
            <div className="pagesItems">
              <Link to="/services/5" onClick={changeLocation1}>Սպիտակ Ավազ</Link>
              <Link to="/services/6" onClick={changeLocation1}>Բանվորական ՈՒժ</Link>
            </div>
          </div>
        </div>
        <div className="secondPart">
          <NavLink
            to="https://www.tiktok.com/@vahan.egoyan?_t=8nHdpY6ZkbR&_r=1"
            target="blank"
          >
            <img width={30} src={imgs.tiktok} alt="Tik Tok img" />
          </NavLink>
          <NavLink
            to="https://www.instagram.com/eghoyan_shin?fbclid=IwZXh0bgNhZW0CMTAAAR3hNDNaQH02JAOTkFE43Z5inVrwDfDqLzNOAQ2PdQccGx_MMv4ghi_RiKA_aem_ZmFrZWR1bW15MTZieXRlcw"
            target="blank"
          >
            <img width={30} src={imgs.instagram} alt="Instagram img" />
          </NavLink>
          <span title="+374 77-29-95-61 +374 55-29-05-61">
            <img width={35} src={imgs.whatsApp} alt="WhatsApp img" />
          </span>
          <span title="+374 77-29-95-61 +374 55-29-05-61">
            <img width={35} src={imgs.viber} alt="Viber img" />
          </span>
        </div>
      </div>
      <div className="footerBottom container">
        <div className="backInfo">
          <p style={{ fontSize: "15px", opacity: 1 }}>Հետադարձ Կապ</p>
          <p>eghoyan.shin@gmail.com</p>
        </div>
        <div className="secondPart1">
          <NavLink
            to="https://www.tiktok.com/@vahan.egoyan?_t=8nHdpY6ZkbR&_r=1"
            target="blank"
          >
            <img width={30} src={imgs.tiktok} alt="Tik Tok img" />
          </NavLink>
          <NavLink
            target="blank"
            to="https://www.instagram.com/eghoyan_shin?fbclid=IwZXh0bgNhZW0CMTAAAR3hNDNaQH02JAOTkFE43Z5inVrwDfDqLzNOAQ2PdQccGx_MMv4ghi_RiKA_aem_ZmFrZWR1bW15MTZieXRlcw"
          >
            <img width={30} src={imgs.instagram} alt="Instagram Img" />
          </NavLink>
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
