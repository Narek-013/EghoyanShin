import { Link } from "react-router-dom";
import "./homesSlider.css";
import PauseOnHover from "./SliderHome";

const locationCompiler = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
}

const HomeSlider = () => {
  return (
    <div className="home-slider">
      <div className="container">
        <div className="slider">
          <div className="leftBlock">
            <ul>
              <li>
                <Link to="/services/1" onClick={locationCompiler}>Մոնտաժ / Դեմոնտաժ</Link>
              </li>
              <li>
                <Link to="/services/2" onClick={locationCompiler}>Քանդման Աշխատանքներ</Link>
              </li>
              <li>
                <Link to="/services/3" onClick={locationCompiler}>Աղբի եվ ՇինԱղբի Տեղափոխում</Link>
              </li>
              <li>
                <Link to="/services/4" onClick={locationCompiler}>Կապիտալ Վերանորոգում</Link>
              </li>
              <li>
                <Link to="/services/5" onClick={locationCompiler}>Սպիտակ Ավազ</Link>
              </li>
              <li>
                <Link to="/services/6" onClick={locationCompiler}>Բանվորական ՈՒժ</Link>
              </li>
            </ul>
          </div>
          <PauseOnHover />
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
