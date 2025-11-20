function Pricing() {
  return (
    <div className="container mb-5 p-5 mt-5">
      <div className="row">
        <div className="col-lg-5 col-sm-12">
          <h1 className="mb-4">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#">See Pricing →</a>
        </div>
        <div className="col-7">
          <div className="row mt-3">
            <div className="col-lg-3 col-md-6 col-sm-6 me-3 pricingImg">
              <img src="assets/pricing0.svg" alt="Pricing_png" />
              <span className="pricingSpan">Free account opening</span>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 me-3 pricingImg">
              <img src="assets/pricingEquity.svg" alt="Pricing_png" />
              <span className="pricingSpan">
                Free equity delivery and direct mutual funds
              </span>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 me-3 pricingImg">
              <img src="assets/intradayTrades.svg" alt="Pricing_png" />
              <span className="pricingSpan">Intraday and F&O</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
