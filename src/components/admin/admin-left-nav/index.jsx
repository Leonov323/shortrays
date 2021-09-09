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
      <div className="max-vh-75 overflow-auto overflow-x-hide container border">
        <NavLink to="/name-of-location">
          <button type="button" className="btn-sm btn-secondary w-100 m-1">
            My location 1
          </button>
        </NavLink>

        <NavLink to="/table-page">
          <button type="button" className="btn-sm btn-secondary w-75 m-1">
            Tables
          </button>
        </NavLink>

        <NavLink to="/table-description">
          <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
            Table 1
          </button>
        </NavLink>

        <NavLink to="/table-description">
          <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
            Table 2
          </button>
        </NavLink>

        <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
          Table 3
        </button>

        <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
          Table 4
        </button>

        <NavLink to="/table-description">
          <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
            Table 5
          </button>
        </NavLink>

        <NavLink to="/table-description">
          <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
            Table 6
          </button>
        </NavLink>

        <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
          Table 7
        </button>

        <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
          Table 8
        </button>

        <NavLink to="/table-description">
          <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
            Table 9
          </button>
        </NavLink>

        <NavLink to="/table-description">
          <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
            Table 10
          </button>
        </NavLink>

        <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
          Table 11
        </button>

        <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
          Table 12
        </button>

        <NavLink to="/table-description">
          <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
            Table 13
          </button>
        </NavLink>

        <NavLink to="/table-description">
          <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
            Table 14
          </button>
        </NavLink>

        <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
          Table 15
        </button>

        <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
          Table 16
        </button>

        <button type="button" className="btn-sm btn-secondary w-75 m-1">
          Waiters
        </button>

        <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
          Mario
        </button>

        <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
          Giacomo
        </button>

        <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
          Luca
        </button>

        <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
          Melissa
        </button>

        <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
          Roberto
        </button>

        <button type="button" className="btn-sm btn-outline-dark w-50 m-1">
          Angela
        </button>
      </div>
    </div>
  );
}
