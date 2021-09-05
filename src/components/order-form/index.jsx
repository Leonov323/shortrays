import React from 'react';
import './style.css';

function Form() {
  return (
    <div>
      <div className="col white-box">
        <div className="col">
          <h2>Fill in the form!</h2>
        </div>
        <div className="col">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="form-control black-border"
            placeholder="John Travolta"
            aria-label="name"
          />
        </div>
        <div className="col">
          <br />
          <label htmlFor="phone=number">Phone number</label>
          <input
            id="phone-number"
            type="text"
            className="form-control black-border"
            placeholder="+12345678910"
            aria-label="Phone number"
          />
        </div>
        <div className="col">
          <br />
          <label htmlFor="inputAdress">Name of the establishment</label>
          <input
            id="inputAdress"
            type="text"
            className="form-control black-border"
            placeholder="Hookah bar"
            aria-label="Adress"
          />
        </div>
        <div className="col">
          <br />
          <label htmlFor="email">Email (Optional)</label>
          <input
            id="email"
            type="text"
            className="form-control black-border"
            placeholder="fishsword@gmail.com"
            aria-label="Email"
          />
        </div>
        <div className="col-12">
          <br />
          <button type="submit" className="btn btn-primary">
            Click me!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
