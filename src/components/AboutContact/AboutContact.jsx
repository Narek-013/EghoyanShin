import React from 'react';
import ContactForm from './ContactForm';
import ContactSocialBlock from './ContactSocialBlock';
import "./aboutContact.css"

const AboutContact = () => {
    return (
      <div className="contactMe container">
        <h6>Կապվեք ինձ հետ</h6>
        <div className="contact">
          <ContactSocialBlock />
          <ContactForm />
        </div>
      </div>
    );
}

export default AboutContact;
