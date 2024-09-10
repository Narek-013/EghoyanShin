import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homesSlider.css";
import { hardHomeSlider } from "./HomeHard";

function PauseOnHover() {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="mobRes">
        {hardHomeSlider.map((el,idx) => {
          return (
            <div className="first" key={idx}>
              <img src={el} alt="#" className="imgSlider" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default PauseOnHover;
