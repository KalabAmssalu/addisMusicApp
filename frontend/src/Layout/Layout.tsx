import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <main>
        <ToastContainer position="top-center" />
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
