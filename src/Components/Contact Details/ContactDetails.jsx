import React from "react";
import "./ContactDetails.css";

const ContactDetails = () => {
  return (
    <>
      <h3 className="contact">Contact Details</h3>

      <div className="contactDetails">
        <div className="contactDetailsEmail">
          <a href="mailto:nabaraj.dhl77@gmail.com">
            <i class="fa-regular fa-envelope mail"></i>
            nabaraj.dhl77@gmail.com
          </a>
        </div>
        <div className="contactDetailsNumber">
          <a href="tel:+9779843077865">
            <i class="fa-solid fa-phone telephone"></i>
            (+977)9843077865
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactDetails;
