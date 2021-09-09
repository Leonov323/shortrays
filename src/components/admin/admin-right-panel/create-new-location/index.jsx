import React from 'react';

export default function CreateNewLocation() {
  return (
    <div className="col h-100 overflow-auto">
      <div className="col h-50 container overflow-auto">
        <div className="row">
          <h2>Your locations</h2>
        </div>
        <div className="col">
          <ul>
            <li>My location 1</li>
          </ul>
        </div>
      </div>
      <div className="h-50 container d-flex flex-column justify-content-center">
        <form>
          <div className="col-lg-5 mx-auto">
            <div>
              <h2>Create new location</h2>
            </div>
            <div className="mb-2">
              <label htmlFor="NameOfNewLocation" className="form-label">
                Name of new location
              </label>
              <input type="text" className="form-control black-border" id="NameOfNewLocation" required />
            </div>
            <div className="mb-2">
              <label htmlFor="Adress" className="form-label">
                Adress of new location
              </label>
              <input type="text" className="form-control black-border" id="Adress" required />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
