import React from 'react';
import './style.css';

function Contacts() {
  return (
    <div className="contact-us">
      <section>
        <h1>contact us</h1>
        <p>We`d love to hear from you!</p>
      </section>
      <div className="row g-3">
        <div className="col-md-6">
          <input type="text" className="form-control black-border" placeholder="Name" aria-label="Name" />
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control black-border" placeholder="Email" aria-label="Email" />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control black-border"
            id="formControlTextarea1"
            rows="6"
            placeholder="Message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </div>
    </div>
  );
}

export default Contacts;
