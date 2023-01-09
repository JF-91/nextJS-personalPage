
import React, { FC } from "react";
import Footer from "./FooterApp";
import NavBarApp2 from "./navbar2/NavBarApp2";


interface PropTyoe {
  children: JSX.Element;
}
const RouterLayout: FC<PropTyoe> = ({ children }) => {
  return (
    <>
      
     
      <NavBarApp2 />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RouterLayout;
