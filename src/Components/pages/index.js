import Navbar from "../Navbar/index";

import CoverSection from "../CoverSection";

import About from "../About";

import Project from "../Projects";
import Features from "../Features";
import Testimonial from "../Testimonial";
import FAQ from "../FAQ";
import Contarct from "../Contract";
import Blog from "../Blog";
import Footer from "../Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <CoverSection />
      <About />
      <Project />
      <Features />
      <Testimonial />
      <FAQ />
      <Contarct />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
