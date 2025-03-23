import React, { useEffect } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  useEffect(() => {
    // const locomotiveScroll = new LocomotiveScroll();
  },[]);
  return (
    <>
      <Loader />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
