import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Page/Shared/Header/Header";
import Footer from "../Page/Shared/Footer/Footer";
import siteBg from "../assets/image/site-bg.jpg";

const Main = () => {
  return (
    <>
      <Header />
      <main
        style={{
          backgroundImage: `url('${siteBg}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Main;
