import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./ContactMe.css";

const ContactMe = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();
  const { register } = useForm();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sarhyqd",
        "template_djh991a",
        form.current,
        "Bh0O9J3dMA3xyE1lQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message Sent Successfully", {
            position: toast.POSITION.TOP_RIGHT,
            theme: "dark",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Error Occured", {
            position: toast.POSITION.TOP_LEFT,
          });
        }
      );
    e.target.reset();
  };
  return (
    <div className="contactMe">
      <h3 className="contactMeHeading ">Keep In Touch Using The Form Below</h3>
      <div className="contactWrapper">
        <div className="contactOne">
          <img
            className="imageContact"
            src="./Images/NabaContact.svg"
            alt="Photo"
          />
        </div>
        <div className="contactTwo">
          <div className="inputFields">
            <form ref={form} onSubmit={sendEmail}>
              <div className="wrapper">
                <div className="inputs">
                  <input
                    type="text"
                    className="form-control widthInput"
                    required
                    {...register("user_name", {
                      required: "Name is required",
                    })}
                    placeholder="Name"
                  />

                  <input
                    type="email"
                    className="form-control widthInput "
                    id="exampleInputEmail1"
                    required
                    {...register("user_email", {
                      required: "Email is required",
                    })}
                    placeholder="Email"
                  />

                  <textarea
                    type="text-area"
                    className="form-control widthInput"
                    id="exampleInputEmail1"
                    required
                    {...register("message", {
                      required: "Message is required",
                    })}
                    placeholder="Message"
                  />
                </div>

                <div className="submitBtn">
                  <button type="submit" className="btn btn-outline-light">
                    Submit
                  </button>
                </div>
              </div>

              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
