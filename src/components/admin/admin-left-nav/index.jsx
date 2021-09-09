import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AdminLeftNav() {
  return (
    <div className="col-lg-3 bg-light">
      <NavLink to="/create-new-location">
        <button type="button" className="btn btn-dark w-100">
          Locations
        </button>
      </NavLink>
      <div className="container mh-55 overflow-auto border">
        <ul>
          <li>
            <NavLink to="/name-of-location">
              <button type="button" className="btn-sm btn-secondary w-100 m-2">
                My location 1
              </button>
            </NavLink>
            <ul>
              <li>
                <NavLink to="/table-page">
                  <button type="button" className="btn-sm btn-secondary w-100 m-1">
                    Tables
                  </button>
                </NavLink>
              </li>
              <ul>
                <li>
                  <NavLink to="/table-description">
                    <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                      Table 1
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/table-description">
                    <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                      Table 2
                    </button>
                  </NavLink>
                </li>
                <li>
                  <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                    Table 3
                  </button>
                </li>
                <li>
                  <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                    Table 4
                  </button>
                </li>
                <li>
                  <NavLink to="/table-description">
                    <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                      Table 5
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/table-description">
                    <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                      Table 6
                    </button>
                  </NavLink>
                </li>
                <li>
                  <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                    Table 7
                  </button>
                </li>
                <li>
                  <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                    Table 8
                  </button>
                </li>
                <li>
                  <NavLink to="/table-description">
                    <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                      Table 9
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/table-description">
                    <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                      Table 10
                    </button>
                  </NavLink>
                </li>
                <li>
                  <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                    Table 11
                  </button>
                </li>
                <li>
                  <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                    Table 12
                  </button>
                </li>
                <li>
                  <NavLink to="/table-description">
                    <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                      Table 13
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/table-description">
                    <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                      Table 14
                    </button>
                  </NavLink>
                </li>
                <li>
                  <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                    Table 15
                  </button>
                </li>
                <li>
                  <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                    Table 16
                  </button>
                </li>
              </ul>
              <li>
                <button type="button" className="btn-sm btn-secondary w-100 m-1">
                  Waiters
                </button>
              </li>
              <ul>
                <li>
                  <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                    Mario
                  </button>
                </li>
                <li>
                  <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                    Giacomo
                  </button>
                </li>
                <li>
                  <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                    Luca
                  </button>
                </li>
                <li>
                  <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                    Melissa
                  </button>
                </li>
                <li>
                  <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                    Roberto
                  </button>
                </li>
                <li>
                  <button type="button" className="btn-sm btn-outline-dark w-100 m-1">
                    Angela
                  </button>
                </li>
              </ul>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
