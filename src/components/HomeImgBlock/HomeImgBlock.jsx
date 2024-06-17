import "./homeImgBlock.css";
import {imgs} from "../../images/img.js"

const HomeImgBlock = () => {
    return (
      <div className="container">
        <div className="secondPartHome">
          <h2>Պատկերի բաժին</h2>
          <div className="home-grid">
            <img src={imgs.homeImgss.aboutImg} alt="construction" />
            <img src={imgs.homeImgss.homeImg2} alt="construction" />
            <img src={imgs.homeImgss.homeImg3} alt="construction" />
            <img src={imgs.homeImgss.homeImg4} alt="construction" />
            <img src={imgs.homeImgss.homeImg5} alt="construction" />
            <img src={imgs.homeImgss.workers} alt="construction" />
          </div>
        </div>
      </div>
    );
}

export default HomeImgBlock;
