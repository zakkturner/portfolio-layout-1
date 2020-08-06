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
            <h3 className="contact__grid__details--title">Contact Me</h3>
            <p className="contact__grid__details--phone">706-622-8353</p>
            <h3 className="contact__grid__details--title">Contact Me</h3>
            <a className="contact__grid__details--email">
              zakkturner1993@gmail.com
            </a>
          </div>
          <div className="contact__grid__form-container">
            <form className="contact__grid__form-container">
              <input
                type="text"
                className="contact__grid__form-container--name"
                placeholder="Your Name"
                name="name"
              />
              <input
                type="email"
                className="contact__grid__form-container--form-email"
                placeholder="Your Email"
                name="name"
              />
              <textarea
                className="contact__grid__form-container--textarea"
                cols="40"
                rows="10"
                name="message"
              ></textarea>

              <input
                className="contact__grid__form-container--submit"
                value="submit"
                type="submit"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
