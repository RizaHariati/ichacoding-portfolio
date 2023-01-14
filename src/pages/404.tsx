import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import { Head } from "../components/seo/seo";
import { navigate } from "gatsby";

type Props = {};

const Error = (props: Props) => {
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  }, []);

  return (
    <>
      <Head title="404" description="Page Not Found" />
      <Layout>
        <div className="main-container">
          <div className="tagline-container">
            <h3 className="tagline mt-5">404 - Page not found</h3>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Error;
