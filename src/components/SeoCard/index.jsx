const SeoCard = ({ seo }) => {
  return (
    <head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta property="og:type" content={seo.ogType} />
      <meta property="og:url" content={seo.ogURL} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.ogImage} />
    </head>
  );
};

export default SeoCard;
