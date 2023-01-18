import { GatsbyImage, getImage } from "gatsby-plugin-image";

import React from "react";
import { useGlobalContext } from "../context/AppProvider";
import { ProjectType } from "../context/types.d";
import { projects } from "../data/data";
import SlideInfo from "./homeComponents/SlideInfo";

type Props = {};

const Home = (props: Props) => {
  const {
    state: { portfolioImages },
  } = useGlobalContext();

  if (
    !portfolioImages ||
    (portfolioImages && Object.keys(portfolioImages).length < 1)
  ) {
    return <div></div>;
  } else {
    return (
      <div className="main-container">
        <div className="main-tagline">
          <h2 className="tagline">
            Connecting your Business goals to your website design and
            application
          </h2>
        </div>
        <div className="slides-container">
          {projects.map((project: ProjectType) => {
            const { id, title, description, slug, mainProgram, url } = project;
            const image = portfolioImages[slug];
            return (
              <div className=" slides" key={id}>
                <div className="slides-content group">
                  <div className="slide-website hidden sm:block ">
                    <GatsbyImage
                      image={image.long!}
                      objectFit="fill"
                      className=" h-52 2xl:h-72"
                      objectPosition="center"
                      alt={title}
                      loading="eager"
                    />
                  </div>
                  <div className="slide-website block sm:hidden ">
                    <GatsbyImage
                      image={image.short!}
                      objectFit="fill"
                      className=" h-52 2xl:h-72 "
                      objectPosition="center"
                      alt={title}
                    />
                  </div>
                  <SlideInfo
                    imageData={image.subphone!}
                    title={title}
                    description={description}
                    mainProgram={mainProgram}
                    url={url}
                    slug={slug}
                  />
                </div>
                <div className=" slide-title-container">
                  <div className="slide-logo  ">
                    <GatsbyImage
                      image={image.logo!}
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
    );
  }
};

export default Home;
