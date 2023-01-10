import React from "react";
import Layout from "../components/layout/Layout";
import { aboutData } from "../data/data";

type Props = {};

const about = (props: Props) => {
  return (
    <Layout>
      <div className="about-container">
        <div className="about-me">
          <div className="about-me-photo"></div>
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

                <p className="capitalize col-span-8">{item[1]}</p>
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export default about;
