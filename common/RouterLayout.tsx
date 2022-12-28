import Head from "next/head";
import React, { FC } from "react";
import Footer from "./Footer";
import NavBarApp from "./NavBarApp";

interface PropTyoe {
  children: JSX.Element;
}
const RouterLayout: FC<PropTyoe> = ({ children }) => {
  return (
    <>
      
      <NavBarApp />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RouterLayout;
