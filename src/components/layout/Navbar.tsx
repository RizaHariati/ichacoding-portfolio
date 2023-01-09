import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Social from "./layoutComponents/Social";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="h-12 sm:h-14 w-full px-2 ">
      <div className="h-full flex items-center justify-between px-2 max-w-6xl mx-auto">
        <h1 className="text-accent hidden sm:block lg:text-3xl transition-all opacity-0 sm:opacity-100">
          Icha<span className=" text-txDrk2">Codes</span>
        </h1>
        <div className="w-8 h-8 rounded-full object-cover object-center overflow-hidden hover:opacity-75 transition-all sm:hidden">
          <StaticImage
            placeholder="dominantColor"
            src="../../images/icons/android-chrome-192x192.png"
            alt="riza hariati"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="flex items-center justify-center gap-1">
          <Link to={pathname === "/about/" ? "/" : "/about/"}>
            <div className="main-btn group">
              <h4>{pathname === "/about/" ? "Home" : "About"}</h4>
              <div className="icon-btn">
                <StaticImage
                  placeholder="dominantColor"
                  src="../../images/icons/profileIcon.jpg"
                  alt="riza hariati"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
          </Link>
          <Social />
        </div>
      </div>
      <div className=" bg-accent w-full h-0.5 rounded-full mb-auto"></div>
    </div>
  );
};

export default Navbar;
