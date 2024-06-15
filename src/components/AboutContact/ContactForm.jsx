import { useRef } from "react";
import { selectShinGroup } from "../../store/Slices/ShinGroupSlice/shinSlices";
import { useSelector } from "react-redux";

const ContactForm = () => {

    const btnRef = useRef(null);
    const thanksP = useRef(null);
    const emailRef = useRef(null);
    const { contactBtn, mailValue } = useSelector(selectShinGroup);


    return (
      <div>
        <form className="formEmail">
          <div className="formArea">
            <label htmlFor="mail">Անուն</label>
            <input
              type="text"
              name="user_name"
              id="mail"
              required
              className="nameClient"
              placeholder="Վահան"
              maxLength={15}
            />
          </div>
          <div className="formArea">
            <label htmlFor="email">Ձեր Email</label>
            <input
              type="email"
              name="user_email"
              id="email"
              required
              maxLength={34}
              placeholder={"egohyan.shin@gmail.com"}
            />
          </div>
          <div className="formArea">
            <label htmlFor="message">Նամակ</label>
            <textarea
              id="w3review"
              required
              name="message"
              rows="2"
              cols="50"
              className="textArea"
              maxLength={250}
              placeholder="Եկեք խոսենք այն մասին..."
            ></textarea>
          </div>
          {contactBtn ? (
            <button ref={btnRef} className="formBtn">
              Ուղարկել Նամակ
            </button>
          ) : (
            <button className="formBtn changeValue">Ուղարկել</button>
          )}
          <p ref={thanksP} className="thanks">
            Շնորհակալություն մեզ հետ կապվելու համար !{" "}
          </p>
        </form>
      </div>
    );
}

export default ContactForm;
