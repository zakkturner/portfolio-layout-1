import React from "react";
import Header from "../../com/header/Header";
import Menu from "../../com/menu/Menu";

import "./Contact.scss";

export default function Contact({ menuState, setMenuState }) {
  return (
    <>
      <Menu menuState={menuState} setMenuState={setMenuState} />

      <Header
        title="Contact Me"
        background="../img/contact-header.jpg"
        txtStyle="light"
        menuState={menuState}
        setMenuState={setMenuState}
      />
      <section className="contact">
        <div className="contact__grid">
          <div className="contact__grid__details">
            <div className="contact__grid__details__detail">
              <h3 className="contact__grid__details__detail--title">Phone</h3>
              <p className="contact__grid__details__detail--info">
                404-482-3287
              </p>
            </div>
            <div className="contact__grid__details__detail">
              <h3 className="contact__grid__details__detail--title">Email</h3>
              <a
                href="mailto:zakkturner1993@gmail.com"
                className="contact__grid__details__detail--info"
              >
                zakkturner1993@gmail.com
              </a>
            </div>
          </div>
          <div className="contact__grid__form-container">
            <form
              className="contact__grid__form-container"
              name="contact"
              method="post"
              action="/contact"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="contact__grid__form-container__inputCont">
                <input
                  type="text"
                  className="contact__grid__form-container__inputCont--input"
                  placeholder="Your Name"
                  name="name"
                  required
                />
              </div>
              <div className="contact__grid__form-container__inputCont">
                <input
                  type="email"
                  className="contact__grid__form-container__inputCont--input"
                  placeholder="Your Email"
                  name="email"
                  required
                />
              </div>
              <div className="contact__grid__form-container__inputCont">
                <input
                  type="text"
                  className="contact__grid__form-container__inputCont--input"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="contact__grid__form-container__inputCont">
                <textarea
                  className="contact__grid__form-container__inputCont--textarea"
                  cols="40"
                  rows="10"
                  name="message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="contact__grid__form-container__submitCont">
                <button
                  className="contact__grid__form-container__submitCont--submit"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
