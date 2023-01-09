import React from "react";
import Layout from "./layout/Layout";

type Props = {};

const LoadingPage = (props: Props) => {
  return (
    <Layout>
      <div className=" main-container ">
        <h4 className="text-accent mt-40 md:text-xl">
          Success is a Series of Small Wins
        </h4>
      </div>
    </Layout>
  );
};

export default LoadingPage;
