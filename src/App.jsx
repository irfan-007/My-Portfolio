import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Navbar from "./components/navbar/Navbar";
import Service from "./components/service/Service";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
