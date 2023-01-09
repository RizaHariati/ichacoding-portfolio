import { faReadme } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context/AppProvider";
import { ProjectType } from "../context/types.d";
import { projects } from "../data/data";
import Layout from "./layout/Layout";

type Props = {};

const Home = (props: Props) => {
  const {
    dispatch,
    state: { allImages },
  } = useGlobalContext();

  return (
    <Layout>
      <div className="main-container">
        <div className="main-tagline">
          <h2 className="tagline">
            We connect your goals to your website design and application
          </h2>
        </div>
        <div className="slides-container">
          {projects.map((project: ProjectType) => {
            const { id, title, slug, description, mainProgram, url } = project;
            let imageData: any = {};
            const findImages = allImages.map((image) => {
              if (image.original.src.includes(slug)) {
                if (image.original.src.includes("long")) {
                  imageData["long"] = getImage(image.gatsbyImageData);
                } else if (image.original.src.includes("short")) {
                  imageData["short"] = getImage(image.gatsbyImageData);
                } else if (image.original.src.includes("phone")) {
                  imageData["phone"] = getImage(image.gatsbyImageData);
                }
              }
              return "";
            });

            return (
              <div key={id} className="slides-content group">
                <div className="slide-website hidden sm:block">
                  <GatsbyImage
                    image={imageData.long}
                    objectFit="fill"
                    className="h-52 sm:h-56  2xl:h-72"
                    objectPosition="center"
                    alt={title}
                  />
                </div>
                <div className="slide-website block sm:hidden">
                  <GatsbyImage
                    image={imageData.short}
                    objectFit="fill"
                    className=" h-52 sm:h-56  2xl:h-72 "
                    objectPosition="center"
                    alt={title}
                  />
                </div>

                <div className="slide-base">
                  <div className="slide-phone">
                    <GatsbyImage
                      image={imageData.phone}
                      objectFit="fill"
                      className=" h-52 sm:h-56  2xl:h-72 "
                      objectPosition="center"
                      alt={title}
                    />
                  </div>

                  <div className="slide-info">
                    <h5 className="font-semibold">{title}</h5>
                    <p className="slide-description">
                      {description.slice(0, 200)}
                    </p>
                    <p className="font-medium">Main Program : {mainProgram}</p>
                    <div className="w-full flex gap-2 p-y mt-2">
                      <button className="standard-btn">
                        <FontAwesomeIcon icon={faInfoCircle} />
                        More...
                      </button>
                      <a href={url} className="standard-btn">
                        <FontAwesomeIcon icon={faPaperPlane} />
                        Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
