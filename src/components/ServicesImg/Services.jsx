import "../HomeImgBlock/homeImgBlock.css";
import { imgs } from "../../images/img.js";

const ServicesImgs = () => {
  return (
    <div className="container">
      <div className="secondPartHome">
        <h2>Պատկերի բաժին</h2>
        <div className="home-grid">
          <img src={imgs.homeImgss.homeImg2} alt="construction" />
          <img src={imgs.services.servicesImg1} alt="construction" />
          <img src={imgs.services.servicesImg2} alt="construction" />
          <img src={imgs.homeImgss.homeImg3} alt="construction" />
          <img src={imgs.services.servicesImg3} alt="construction" />
          <img src={imgs.services.servicesImg4} alt="construction" />
        </div>
      </div>
    </div>
  );
};

export default ServicesImgs;
