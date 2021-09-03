import React from 'react';
import './style.css';

function Form() {
  return (
    <div className="order-form">
      <div id="contacts">
        <div className="container">
          <div className="row2">
            <h4>Fill in the form!</h4>
          </div>
          <div className="row input-container">
            <div className="col-xs-12">
              <div className="styled-input wide">
                <input type="text" required />
                <label>Name</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input wide">
                <input type="text" required />
                <label>Phone number</label>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="styled-input wide float">
                <input type="text" required />
                <label>Email</label>
              </div>
            </div>
            <div className="col-xs-12">
              <div className="btn-lrg submit-btn">Click me!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
