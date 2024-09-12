import { imgs } from "../../images/img.js";

const ContactSocialBlock = () => {
  return (
    <div className="leftContact">
      <h4 className="text-xl font-bold text-white my-2 lightModT">Եկեք Միացնենք</h4>
      <p className="infoContactLeft">
        Դուք կարող եք կապվել մեզ հետ՝ օգտագործելով հետևյալ տարբերակները հեռախոսահամարով, WhatsApp, Viber, instagram, TikTok
      </p>
      <div className="social">
        <a href="https://wa.me/77299561?text=Hello%20World">
          <img width={35} src={imgs.whatsApp} alt="WhatsApp img" />
        </a>
        <a href="viber://chat?number=%2B37477299561">
          <img width="35" src={imgs.viber} alt="Viber img" />
        </a>
      </div>
    </div>
  );
};

export default ContactSocialBlock;
