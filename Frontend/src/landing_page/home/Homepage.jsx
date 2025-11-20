import Awards from "./Awards";
import Education from "./Education";
import Policies from "./Policies";
import Pricing from "./Pricing";
import Hero from "./Hero";

import Navbar from "../Navbar";
import OpenAccount from "../OpenAccount";
import Footer from "../Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Policies />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
