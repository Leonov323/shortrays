import React from 'react';
import './style.css';

function Form() {
  return (
    <div>
      <div className="col">
        <h2>fill in the form!</h2>
        <div className="col">
          <label></label>
          <input type="text" className="form-control" placeholder="name" aria-label="name" />
        </div>
        <div className="col">
          <label></label>
          <input type="text" className="form-control" placeholder="Phone number" aria-label="Phone number" />
        </div>
        <div className="col">
          <label></label>
          <input type="text" className="form-control" placeholder="Adress" aria-label="Adress" />
        </div>
        <div className="col">
          <label></label>
          <input type="text" className="form-control" placeholder="Email (optional)" aria-label="Email" />
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
