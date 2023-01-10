import React, { useState } from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Social from "./layoutComponents/Social";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { useGlobalContext } from "../../context/AppProvider";

import { AllImageType } from "../../context/types.d";
import { getGatsbyImage } from "../../utils/getGatsbyImage";

const Navbar = () => {
  const { pathname } = useLocation();
  const {
    state: { allImages },
  } = useGlobalContext();
  const [iconImage] = useState(getGatsbyImage("profileIcon", allImages));
  console.log(iconImage);
  return (
    <div className="h-12 sm:h-14 w-full px-2 mb-1 ">
      <div className="h-full flex items-center justify-between px-2 max-w-4xl 2xl:max-w-6xl mx-auto">
        <Link
          to="/"
          className=" cursor-pointer hover:opacity-70 transition-all flex flex-row
          items-center justify-start gap-x-2"
        >
          <div className="w-8 h-8 rounded-full object-cover object-center overflow-hidden hover:opacity-75 transition-all sm:hidden md:block">
            <StaticImage
              placeholder="dominantColor"
              src="../../images/icons/android-chrome-192x192.png"
              alt="riza hariati"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <h1 className="text-textMed hidden sm:block lg:text-3xl transition-all opacity-0 sm:opacity-100">
            Icha<span className=" text-accent ">Codes</span>
          </h1>
        </Link>

        <div className="flex items-center justify-center gap-1">
          <Link to={pathname === "/about/" ? "/" : "/about/"}>
            <div className="main-btn group">
              <h4>{pathname === "/about/" ? "Home" : "About"}</h4>
              <div className="icon-btn">
                {iconImage && (
                  <GatsbyImage
                    image={iconImage}
                    className="w-8 h-8 sm:w-10 sm:h-10 "
                    objectFit="cover"
                    objectPosition="center"
                    alt="riza hariati"
                  />
                )}
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
