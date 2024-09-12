import AboutFirstBlock from "../../components/AboutFirstBlock/AboutFirstBlock";
import HomeImgBlock from "../../components/HomeImgBlock/HomeImgBlock";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import SeoCard from "../../components/SeoCard";
import { homeSeo } from "../../constant/seo";

const Home = () => {
    return (
      <div id="/">
        <HomeSlider />
        <HomeImgBlock />
        <AboutFirstBlock />
        <SeoCard seo={homeSeo} />
      </div>
    );
}

export default Home;
