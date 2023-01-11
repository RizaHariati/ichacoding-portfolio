import React from "react";
import Layout from "../components/layout/Layout";

type Props = {};

const Error = (props: Props) => {
  return (
    <Layout>
      <div className="main-container">
        <div className="tagline-container">
          <h3 className="tagline mt-5">404 - Page not found</h3>
        </div>
      </div>
    </Layout>
  );
};

export default Error;
