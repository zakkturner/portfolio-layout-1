import React from "react";
import Header from "../../com/header/Header";

import "./Contact.scss";

export default function Contact() {
  return (
    <>
      <Header
        title="Contact Me"
        background="../img/contact-header.jpg"
        txtStyle="light"
      />
      <section className="contact">
        <div className="contact__grid">
          <div className="contact__grid__details">
            <div className="contact__grid__details__detail">
              <h3 className="contact__grid__details__detail--title">Phone</h3>
              <p className="contact__grid__details__detail--phone">
                706-622-8353
              </p>
            </div>
            <div className="contact__grid__details__detail">
              <h3 className="contact__grid__details__detail--title">Email</h3>
              <a className="contact__grid__details__detail--email">
                zakkturner1993@gmail.com
              </a>
            </div>
          </div>
          <div className="contact__grid__form-container">
            <form className="contact__grid__form-container">
              <div className="contact__grid__form-container__inputCont">
                <input
                  type="text"
                  className="contact__grid__form-container__inputCont--input"
                  placeholder="Your Name"
                  name="name"
                />
              </div>
              <div className="contact__grid__form-container__inputCont">
                <input
                  type="email"
                  className="contact__grid__form-container__inputCont--input"
                  placeholder="Your Email"
                  name="name"
                />
              </div>
              <div className="contact__grid__form-container__inputCont">
                <textarea
                  className="contact__grid__form-container__inputCont--textarea"
                  cols="40"
                  rows="10"
                  name="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="contact__grid__form-container__submitCont">
                <input
                  className="contact__grid__form-container__submitCont--submit"
                  value="Send Message"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
