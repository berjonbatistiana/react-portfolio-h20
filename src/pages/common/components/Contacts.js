import React from "react";
import './styles/contacts.css';
import background from "./styles/main-background.jpg";

export function Contacts() {
  
  return (
    <div className="content" style={{backgroundImage: `url(${background})`}}>
      <section className="container-fluid">
        <div className="contacts-container col-md-9 col-xs-12">
          <p className="contacts-header">Contact</p>
        
          <form id="contact-me-form" action="#">
            <div className="form-group contact-name">
              <label className="contact-name-text" htmlFor="contact-name-input"
              >Name</label
              >
              <input
                name="contact-name"
                type="text"
                placeholder="John Smith"
                className="form-control"
                id="contact-name-input"
              />
            </div>
          
            <div className="form-group contact-email">
              <label className="contact-email-text" htmlFor="contact-email-input"
              >Email</label
              >
              <input
                name="contact-email"
                type="text"
                placeholder="example@gmail.com"
                className="form-control"
                id="contact-email-input"
              />
            </div>
          
            <div className="form-group contact-message">
              <label className="contact-email-text" htmlFor="contact-email-input"
              >Message</label
              >
              <textarea
                name="contact-message"
                type="text"
                placeholder=""
                className="form-control"
                id="contact-message-input"
              ></textarea>
            </div>
          
            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}
