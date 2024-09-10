import { imgs } from "../../images/img.js";

const ContactSocialBlock = () => {
  return (
    <div className="leftContact">
      <h4 className="text-xl font-bold text-white my-2 lightModT">
        Եկեք Միացնենք
      </h4>
      <p className="infoContactLeft">
        Դուք կարող եք կապվել մեզ հետ՝ օգտագործելով հետևյալ տարբերակները
        հեռախոսահամարով, WhatsApp, Viber, instagram, TikTok
      </p>
      <div className="social">
        <span title="+374 77-29-95-61 +374 55-29-05-61">
          <img src={imgs.whatsApp} alt="instagram img" />
        </span>
        <span title={`+374 77-29-95-61 +374 55-29-05-61`}>
          <img src={imgs.viber} alt="instagram img" />
        </span>
      </div>
    </div>
  );
};

export default ContactSocialBlock;
