import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="relative h-screen w-full ">
      <StaticImage
        src="../../images/background_dark.jpg"
        alt="background"
        layout="constrained"
        placeholder="tracedSVG"
        className=" fixed top-0 left-0 w-full h-screen overflow-hidden resize-y -z-10 "
      />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
