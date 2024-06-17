import "./footer.css";
import { imgs } from "../../images/img";
import { NavLink, useNavigate } from "react-router-dom";
import {Link} from "react-scroll";

const Footer = () => {

  const navigate = useNavigate();

  const changeLocations = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
    navigate("/");
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
              <NavLink>Մոնտաժ/ԴեՄոնտաժ</NavLink>
              <NavLink>Քանդման Աշխատանքներ</NavLink>
            </div>
            <div className="pagesItems">
              <NavLink>Աղբի եվ ՇինԱղբի Տեղափոխում</NavLink>
              <NavLink>Վերանորոգման Աշխատանքներ</NavLink>
            </div>
            <div className="pagesItems">
              <NavLink>Սպիտակ Ավազ</NavLink>
              <NavLink>Բանվորական ՈՒժ</NavLink>
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
          <span title="+374 77-29-95-61">
            <img width={35} src={imgs.whatsApp} alt="WhatsApp img" />
          </span>
          <span title="+374 77-29-95-61">
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
