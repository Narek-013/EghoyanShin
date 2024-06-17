import {imgs} from "../../images/img.js"

const ContactSocialBlock = () => {
  
  return (
    <div className="leftContact">
      <h3 className="text-xl font-bold text-white my-2 lightModT">
        Եկեք Միացնենք
      </h3>
      <p className="infoContactLeft">
        I&apos;m currently looking for new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I&apos;ll try
        my best to get back to you!
      </p>
      <div className="social">
        <img src={imgs.whatsApp} alt="instagram img" />
        <img src={imgs.viber} alt="instagram img" />
      </div>
    </div>
  );
};

export default ContactSocialBlock;
