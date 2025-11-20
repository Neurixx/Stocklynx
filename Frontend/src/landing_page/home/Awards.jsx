import React from "react";

function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-lg-6 col-sm-12 p-5 pt-2 ps-sm-0">
          <img src="assets/largestBroker.svg" alt="Largest Broker Image" />
        </div>
        <div className="col-lg-6 col-sm-12 mt-5 p-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-4 mt-3">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li className="p-1">Future and Options</li>
                <li className="p-1">Commodity Derivatives</li>
                <li className="p-1">Currency Derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className="p-1">Stock & IPOs</li>
                <li className="p-1">Direct Mutual Funds</li>
                <li className="p-1">Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img
            src="assets/pressLogos.png"
            alt="Press Logo"
            className="col-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
