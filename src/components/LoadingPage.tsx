import React from "react";
import Layout from "./layout/Layout";

type Props = {};

const LoadingPage = (props: Props) => {
  return (
    <Layout>
      <div className=" main-container ">
        <div className="flex flex-col items-center justify-between h-full py-10">
          <h4 className="text-accent mt-24 md:text-xl ">
            Success is a Series of Small Wins
          </h4>
          <p className="text-sm text-textLit">
            Powered by Gatsby.JS copyright &copy;{new Date().getFullYear()} Riza
            hariati for IchaCoding
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default LoadingPage;
