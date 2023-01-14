import React from "react";
import { useGlobalContext } from "../context/AppProvider";
import LoadingPage from "../components/LoadingPage";
import Home from "../components/Home";
import { Head } from "../components/seo/seo";
import Layout from "../components/layout/Layout";
type Props = {};
const index = (props: Props) => {
  const {
    state: { allImages },
  } = useGlobalContext();

  return (
    <Layout>
      <Head
        title="Welcome"
        description="Hello, I'm Riza Hariati (依扎 / Icha). Welcome to IchaCodes' portfolio website showcasing a selected few of the websites I have built since 2020"
      />
      {!allImages ||
        (allImages && Object.keys(allImages).length < 1 && <LoadingPage />)}

      {allImages && Object.keys(allImages).length > 0 && <Home />}
    </Layout>
  );
};

export default index;

//  if (!allImages || (allImages && Object.keys(allImages).length < 1)) {
//    return (
//      <>
//        <Head
//          title="Welcome"
//          description="Hello, I'm Riza Hariati (依扎 / Icha). Welcome to IchaCodes' portfolio website showcasing a selected few of the websites I have built since 2020"
//        />
//        <LoadingPage />;
//      </>
//    );
//  } else {
//    return (
//      <>
//        <Head
//          title="Home"
//          description="Hello, I'm Riza Hariati (依扎 / Icha). Welcome to IchaCodes' portfolio website showcasing a selected few of the websites I have built since 2020"
//        />

//        <Home />
//      </>
//    );
//  }
