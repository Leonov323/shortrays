import React from 'react';

export default function LocationPage() {
  return (
    <div className="col h-100 overflow-auto">
      <div className="col h-50 container overflow-auto">
        <div className="row">
          <h2>My location 1</h2>
        </div>
        <div className="col">
          <ul>
            <li>adress: Venezia street 21.</li>
            <li>tables: table1, table2, table3, table4</li>
            <li>Waiters: Mario</li>
          </ul>
        </div>
      </div>
      <div className="h-50 container d-flex flex-column justify-content-center">
        <form className="col d-flex flex-wrap align-items-center">
          <div className="col-lg-5 mx-auto mt-3 mb-3">
            <div>
              <h2>Create new table</h2>
            </div>
            <div>
              <div>
                <label htmlFor="NameOfNewLocation" className="form-label">
                  Name of new table
                </label>
                <input type="text" className="form-control black-border" id="NameOfNewLocation" required />
              </div>
              <div>
                <button type="submit" className="btn btn-primary mt-2">
                  Create
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-5 mx-auto mt-3 mb-3">
            <div>
              <h2>Create new waiter</h2>
            </div>
            <div>
              <div>
                <label htmlFor="NameOfNewLocation" className="form-label">
                  Name of new waiter
                </label>
                <input type="text" className="form-control black-border" id="NameOfNewLocation" required />
              </div>
              <div>
                <button type="submit" className="btn btn-primary mt-2">
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
