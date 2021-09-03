import React from 'react';
import './style.css';

function Form() {
  return (
    <div>
      <div className="col black-box">
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
          <label htmlFor="adress">Adress</label>
          <input
            id="adress"
            type="text"
            className="form-control black-border"
            placeholder="P.O. Box 3560, Santa Barbara CA 93130, United States"
            aria-label="Adress"
          />
        </div>
        <div className="col">
          <br />
          <label htmlFor="email">Email</label>
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
