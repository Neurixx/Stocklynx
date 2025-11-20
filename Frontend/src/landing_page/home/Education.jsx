function Education() {
  return (
    <div className="container mb-5 p-5">
      <div className="row">
        <img
          className="col-6  educationImg"
          src="assets/education.svg"
          alt="Education_png"
        />
        <div className="col-6  pt-5 ms-5">
          <h1 className="mb-4">Free and open market education</h1>
          <div className="mb-4">
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="#">Varsity →</a>
          </div>
          <div>
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="#">TradingQ&A →</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
