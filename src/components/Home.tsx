import { GatsbyImage, getImage } from "gatsby-plugin-image";

import React from "react";
import { useGlobalContext } from "../context/AppProvider";
import { ProjectType } from "../context/types.d";
import { projects } from "../data/data";
import Layout from "./layout/Layout";
import SlideInfo from "./homeComponents/SlideInfo";

type Props = {};

const Home = (props: Props) => {
  const {
    state: { allImages },
  } = useGlobalContext();

  return (
    <Layout>
      <div className="main-container">
        <div className="main-tagline">
          <h2 className="tagline">
            Connecting your goals to your website design and application
          </h2>
        </div>
        <div className="slides-container">
          {projects.map((project: ProjectType) => {
            const { id, title, slug, description, mainProgram, url } = project;
            let imageData: any = {};
            allImages.map((image) => {
              if (image.original.src.includes(slug)) {
                if (image.original.src.includes("long")) {
                  imageData["long"] = getImage(image.gatsbyImageData);
                } else if (image.original.src.includes("short")) {
                  imageData["short"] = getImage(image.gatsbyImageData);
                } else if (image.original.src.includes("phone")) {
                  imageData["phone"] = getImage(image.gatsbyImageData);
                } else if (image.original.src.includes("logo")) {
                  imageData["logo"] = getImage(image.gatsbyImageData);
                }
              }
              return "";
            });

            return (
              <div className=" slides">
                <div key={id} className="slides-content group">
                  <div className="slide-website hidden sm:block 2xl:hidden">
                    <GatsbyImage
                      image={imageData.long}
                      objectFit="fill"
                      className="h-52  2xl:h-72"
                      objectPosition="center"
                      alt={title}
                    />
                  </div>
                  <div className="slide-website block sm:hidden 2xl:block">
                    <GatsbyImage
                      image={imageData.short}
                      objectFit="fill"
                      className=" h-52  2xl:h-72 "
                      objectPosition="center"
                      alt={title}
                    />
                  </div>
                  <SlideInfo
                    imageData={imageData}
                    title={title}
                    description={description}
                    mainProgram={mainProgram}
                    url={url}
                  />
                </div>
                <div className=" slide-title-container">
                  <div className="slide-logo  ">
                    <GatsbyImage
                      image={imageData.logo}
                      className="w-5 h-5 2xl:w-8 2xl:h-8 "
                      objectFit="fill"
                      objectPosition="center"
                      alt={title}
                    />
                  </div>
                  <h5 className="font-semibold text-base 2xl:text-2xl">
                    {title}
                  </h5>
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
