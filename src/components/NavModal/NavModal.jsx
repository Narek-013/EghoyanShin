import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./navModal.css";

const NavModal = ({ setOpen }) => {
  const navigate = useNavigate();

  const changeLocation = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
    setOpen(false);
    navigate("/");
  };
  const changeLocationAbout = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
    setOpen(false);
    navigate("/about");
  };
  const changeLocationService = () => {
    setOpen(false);
    window.scrollTo({ behavior: "smooth", top: 0 });
    navigate("/services");
  };
  
  return (
    <div className="modalNavMenu">
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
  );
};

export default NavModal;
