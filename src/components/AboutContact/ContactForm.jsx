import { useRef } from "react";
import {changeBtn,changeBtnErr,selectShinGroup,} from "../../store/Slices/ShinGroupSlice/shinSlices";
import { useDispatch, useSelector } from "react-redux";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const btnRef = useRef(null);
  const thanksP = useRef(null);
  const emailRef = useRef(null);
  const dispatch = useDispatch();
  const { contactBtn, mailValue } = useSelector(selectShinGroup);

  const sendEmail = (ev) => {
    ev.preventDefault();

    // const serviceId = "service_6muu1yb";
    // const publicKey = "TcfgM1bUDeOz9R0iP";
    // const templateId = "template_9hdc2np";

    const {
      user_name: { value: user_name },
      user_email: { value: user_email },
      message: { value: message },
    } = ev.target;

    const templateParams = {
      from_name: user_name,
      from_email: user_email,
      message,
    };

    //  emailjs
    //    .send(serviceId, templateId, templateParams, publicKey)
    //    .then((response) => {
    //      console.log("succses");
    //    })
    //    .catch((error) => {
    //      console.log(error);
    //    });

    btnRef.current.classList.add("noneBtn");
    thanksP.current.classList.add("blockP");

    ev.target.reset();
  };

  const seeValue = (ev) => {
    const txt = ev.target.value;
    if (
      txt.includes("@gmail.com") ||
      txt.includes("@gmail.am") ||
      txt.includes("@mail.ru") ||
      txt.includes("@mail.am") ||
      txt.includes("@mail.com") ||
      txt.includes("@bk.ru") ||
      txt.includes("@inbox.") ||
      txt.includes("@Yahoo.")
    ) {
      dispatch(changeBtn(txt));
    } else {
      dispatch(changeBtnErr());
      thanksP.current.classList.remove("blockP");
    }
  };

  const seeValues = (ev) => {
    const txt = ev.target.value;
    if (
      txt.includes("@gmail.com") ||
      txt.includes("@gmail.am") ||
      txt.includes("@mail.ru") ||
      txt.includes("@mail.am") ||
      txt.includes("@mail.com") ||
      txt.includes("@bk.ru") ||
      txt.includes("@inbox.") ||
      txt.includes("@Yahoo.")
    ) {
      emailRef.current.textContent = "Ձեր Email";
      emailRef.current.style.color = "black";
    } else {
      emailRef.current.style.color = "red";
      emailRef.current.textContent = "Տեսակը սխալ է *";
    }
  }
  

  return (
    <div>
      <form className="formEmail" onSubmit={sendEmail}>
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
          <label ref={emailRef} htmlFor="email">
            Ձեր Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            onBlur={seeValues}
            onChange={seeValue}
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
};

export default ContactForm;
