import { Helmet } from "react-helmet-async";
import AboutContact from "../../components/AboutContact/AboutContact";
import AboutFirstBlock from "../../components/AboutFirstBlock/AboutFirstBlock";
import AboutMe from "../../components/AboutMe/AboutMe";
import SeoCard from "../../components/SeoCard";
import { aboutSeo } from "../../constant/seo";

const About = () => {
    return (
      <div id="/about">
        <Helmet>
          <title>Մեր Մասին</title>
          <meta name="description" content="eghoyanshin.am" />
        </Helmet>
        <AboutMe />
        <AboutFirstBlock />
        <AboutContact />
        <SeoCard seo={aboutSeo} />
      </div>
    );
}

export default About;
