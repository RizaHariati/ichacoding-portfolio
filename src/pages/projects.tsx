import React from "react";
import Layout from "../components/layout/Layout";
import { useGlobalContext } from "../context/AppProvider";

type Props = {};

const Projects = ({ pageContext: { project } }: any) => {
  const {
    state: { allImages },
  } = useGlobalContext();

  if (!allImages || (allImages && Object.keys(allImages).length < 1))
    return <div></div>;
  else {
    return (
      <Layout>
        <div className="project-container">
          <div className="project-info-container">
            <div className="project-phone">
              <div className="project-phone-image"></div>
            </div>
            <div className="project-info">
              <h2>{project.title}</h2>
              <div className="project-description">
                {project.description.map((item: string, index: number) => {
                  return <p key={index}>{item}</p>;
                })}
              </div>
              <p>Main Program : {project.mainProgram}</p>
              <div>
                <p>Dependencies :</p>
              </div>
            </div>
          </div>
          <div className="project-image-container"></div>
        </div>
      </Layout>
    );
  }
};

export default Projects;
