import React from "react";
import contactIllustration from "../assets/images/drawkit-support-man-colour.svg";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-content row">
        <div className="content-image col-lg-4 col-sm-12">
          <img src={contactIllustration} alt="drawkit-support-man-colour" />
        </div>

        <div className="content-text col-lg-8 col-sm-12">
          <h1>Want to work with me?</h1>
          <p>
            If you still have any further questions or if you are an employer
            and would like more infromation, please feel free to send me an
            email, or message me via LinkedIn.
          </p>

          <a className="styled-button" href="mailto:erodrigueztoimil@gmail.com">
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
