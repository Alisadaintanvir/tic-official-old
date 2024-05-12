import { Component, Fragment } from "react";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import About from "../component/section/about";
import Achievement from "../component/section/achievement";
import Banner from "../component/section/banner";
import Course from "../component/section/course";
import Instructor from "../component/section/instructor";
import Sponsor from "../component/section/sponsor";
import Student from "../component/section/student";
import Feature from "../component/section/feature";
import Clients from "../component/section/clients";
import Event from "../component/section/event";
import Offer from "../component/section/offer";
import Hero from "../component/section/Hero";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Hero />
      <Sponsor />
      <Feature />
      <Course />
      <About />
      <Offer />
      <Event />
      <Student />
      <Clients />
      <Achievement />
      <Footer />
    </>
  );
};

export default Home;
