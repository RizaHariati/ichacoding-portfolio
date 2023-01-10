import React from "react";
import Layout from "../components/layout/Layout";

type Props = {};

const Error = (props: Props) => {
  return (
    <Layout>
      <div className="main-container">
        <div className="tagline-container">
          <h5 className="tagline">Page not found</h5>
        </div>
      </div>
    </Layout>
  );
};

export default Error;
