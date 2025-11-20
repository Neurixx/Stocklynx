function Pricing() {
  return (
    <div className="container mb-5 pb-5">
      <div className="text-center priceHeroHeading">
        <h1>Charges</h1>
        <p style={{ fontSize: "20px", opacity: "0.7" }}>
          List of all charges and taxes
        </p>
      </div>
      <div className="row text-center" style={{ paddingTop: "80px" }}>
        <div className="col p-5 pricingDiv">
          <img
            className="pricingImages"
            src="assets/pricing0.svg"
            alt="Pricing_png"
          />
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col p-5 pricingDiv me-3 ms-3">
          <img
            className="pricingImages"
            src="assets/intradayTrades.svg"
            alt="Pricing_png"
          />
          <h2>Intraday and F&O trades</h2>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col p-5 pricingDiv">
          <img
            className="pricingImages"
            src="assets/pricingEquity.svg"
            alt="Pricing_png"
          />
          <h2>Free direct MF</h2>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
