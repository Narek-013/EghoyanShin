import { Link } from "react-router-dom";
import "./homesSlider.css";
import avaz from "../../images/png/homePageImg2.webp"
import worker from "../../images/png/worker.jpg";
import home from "../../images/png/01_View02_3.jpg"
import axb from "../../images/png/1.jpg"
import qandel from "../../images/png/65277717.jpg"
import montaj from "../../images/png/montaj.jpg"

const HomeSlider = () => {
  return (
    <div className="home-slider">
      <div className="container">
        <div className="slider">
          <div className="leftBlock"> 
            <ul>
              <li>
                <Link to="">Մոնտաժ / Դեմոնտաժ</Link>
              </li>
              <li>
                <Link to="">Քանդման Աշխատանքներ</Link>
              </li>
              <li>
                <Link to="">Աղբի եվ ՇինԱղբի Տեղափոխում</Link>
              </li>
              <li>
                <Link to="">Կապիտալ Վերանորոգում</Link>
              </li>
              <li>
                <Link to="">Սպիտակ Ավազ</Link>
              </li>
              <li>
                <Link to="">Բանվորական ՈՒժ</Link>
              </li>
            </ul>
          </div>
          <div className="rightBlock">
            <img src={montaj} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
