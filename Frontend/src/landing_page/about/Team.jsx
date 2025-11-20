function Team() {
  return (
    <div className="container mt-5 aboutTeamContainer">
      <div className="row text-center">
        <h1 className="mb-5">People</h1>
        <div className="col-6 founderImgDiv mt-4">
          <img src="assets/nithinKamath.jpg" alt="Founder&CEO" />
          <h5 style={{ fontSize: "18px", marginTop: "20px" }}>Nithin Kamath</h5>
          <p>Founder, CEO</p>
        </div>
        <div className="col-6 text-start mt-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
