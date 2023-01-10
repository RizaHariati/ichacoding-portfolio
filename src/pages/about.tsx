import { GatsbyImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { useGlobalContext } from "../context/AppProvider";
import { aboutData } from "../data/data";
import { getGatsbyImage } from "../utils/getGatsbyImage";

type Props = {};

const about = (props: Props) => {
  const {
    state: { allImages },
  } = useGlobalContext();
  const [image] = useState<any>(getGatsbyImage("profilePicSmall", allImages));

  return (
    <Layout>
      <div className="about-container">
        <div className="about-me">
          <div className="about-me-photo">
            <GatsbyImage
              image={image}
              className="w-28 h-28 md:w-40 md:h-40 rounded-full "
              objectFit="cover"
              objectPosition="center"
              alt="IchaIcon"
            />
          </div>
          <div className="about-me-message">
            {aboutData.message.map((item: string, index: number) => {
              return (
                <p
                  className={index === 0 ? "font-bold" : "font-normal"}
                  key={index}
                >
                  {item}
                </p>
              );
            })}
          </div>
        </div>
        {Object.entries(aboutData)
          .slice(1)
          .map((item, index) => {
            return (
              <div key={index} className="about-skill">
                <p className="capitalize col-span-1 font-bold">{item[0]}</p>

                <p className="capitalize col-span-8 font-normal">{item[1]}</p>
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export default about;
