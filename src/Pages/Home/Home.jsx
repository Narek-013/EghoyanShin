import AboutFirstBlock from "../../components/AboutFirstBlock/AboutFirstBlock";
import HomeImgBlock from "../../components/HomeImgBlock/HomeImgBlock";
import HomeSlider from "../../components/HomeSlider/HomeSlider";

const Home = () => {
    return (
      <div id="/">
        <HomeSlider />
        <HomeImgBlock />
        <AboutFirstBlock/>
      </div>
    );
}

export default Home;
