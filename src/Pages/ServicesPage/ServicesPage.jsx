import React from 'react';
import Services from '../../components/Services/Services';
import ServicesImgs from '../../components/ServicesImg/Services';
import SeoCard from '../../components/SeoCard';
import { serviceSeo } from '../../constant/seo';
import { Helmet } from 'react-helmet-async';

const ServicesPage = () => {
    return (
      <div id="/services">
        <Helmet>
          <title>Ծառայություններ</title>
          <meta name="description" content="eghoyanshin.am" />
        </Helmet>
        <Services />
        <ServicesImgs />
        <SeoCard seo={serviceSeo} />
      </div>
    );
}

export default ServicesPage;
