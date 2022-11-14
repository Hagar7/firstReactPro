import React from "react";
import style from "./Contact.module.css";

export default function Contact() {

  return (
    <>
      <div className={`${style.contact}`} id="contact">
        <div className="container">
            <div className={`${style.title}`}>

          <h2>Contact ME</h2>
          <span>
            <i className="fa-solid fa-star" />
          </span>
            </div>
          <div className="row p-5">
            <div className="offset-lg-2 col-lg-8 offset-lg-2">
              <div className={`${style.myForm}`}>
                <div className={`${style.formGroup} form-group`}>
                  <input
                    type="text"
                    name="name"
                    id="username"
                    placeholder="Name"
                    className={`${style.bord} form-control `}
                  />
                </div>
                <div className={`${style.formGroup} form-group`}>
                  <input
                    type="email"
                    name="email"
                    id="useremail"
                    placeholder="Email Address"
                    className={`${style.bord} form-control `}
                  />
                </div>
                <div className={`${style.formGroup} form-group`}>
                  <input
                    type="number"
                    name="phone"
                    id="userphone"
                    placeholder="Phone Number"
                    className={`${style.bord} form-control `}
                  />
                </div>
                <div className={`${style.formGroup} form-group`}>
                  <textarea
                    name="message"
                    id=""
                    rows="10"
                    className={`${style.bord} form-control `}
                    placeholder="Message"
                  />
                </div>
              </div>
              <div className="mb-3 mt-4">
                <button
                  type="submit"
                  className={`${style.myBtn} btn btn-primary `}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
