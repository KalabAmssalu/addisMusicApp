import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { css } from "@emotion/css";

type Props = {};

const Layout = (props: Props) => {
  return (
    <>
      <Header />
      <main
        className={css`
          overflow: hidden;

          @media (max-width: 768px) {
          }
        `}
      >
        <ToastContainer position="top-center" />
        <Routers />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
