import { Helmet } from "react-helmet-async";
import AboutFirstBlock from "../../components/AboutFirstBlock/AboutFirstBlock";
import HomeImgBlock from "../../components/HomeImgBlock/HomeImgBlock";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import SeoCard from "../../components/SeoCard";
import { homeSeo } from "../../constant/seo";

const Home = () => {
    return (
      <div id="/">
        <Helmet>
          <title>Գլխավոր</title>
          <meta name="description" content="eghoyanshin.am" />
        </Helmet>
        <HomeSlider />
        <HomeImgBlock />
        <AboutFirstBlock />
        <SeoCard seo={homeSeo} />
      </div>
    );
}

export default Home;
