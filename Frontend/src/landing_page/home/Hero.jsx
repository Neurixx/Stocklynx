import "./Hero.css";

function Hero() {
  return (
    <div className="container p-lg-5">
      <div className="row text-center">
        <img
          src="assets/homeHero.png"
          alt="Trading platform interface"
          className="mb-3 col-lg-10 homeHeroImg"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p className="homeHeroP">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <form action="/signup">
          <button className="mt-3 btn btn-primary signUpBtn">
            Sign up for free
          </button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
