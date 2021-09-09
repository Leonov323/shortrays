import React from 'react';
import ExampleQr from './qr-codes/example.jpg';

export default function TableDescription() {
  return (
    <div className="col h-100 overflow-auto">
      <div className="col-lg-5 mx-auto">
        <div className="card container w-100">
          <img src={ExampleQr} className="card-img-top" alt="QR code" />
          <div className="card-body">
            <h5 className="card-title">Table 1</h5>
            <p className="card-text">example text</p>
            <button className="btn btn-primary">Download</button>
          </div>
        </div>
      </div>
    </div>
  );
}
