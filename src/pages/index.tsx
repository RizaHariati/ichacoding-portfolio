import React from "react";
import { useGlobalContext } from "../context/AppProvider";
import LoadingPage from "../components/LoadingPage";
import Home from "../components/Home";
import { Head } from "../components/seo/seo";
type Props = {};
const index = (props: Props) => {
  const {
    state: { allImages },
  } = useGlobalContext();

  if (!allImages || (allImages && Object.keys(allImages).length < 1)) {
    return (
      <>
        <Head
          title="Loading"
          description="Hello, I'm Riza Hariati (依扎 / Icha). Welcome to IchaCodes portfolio  website showcasing a selected few of the websites I have built since 2020"
        />
        <LoadingPage />;
      </>
    );
  } else {
    return (
      <>
        <Head
          title="Home"
          description="Hello, I'm Riza Hariati (依扎 / Icha). Welcome to IchaCodes portfolio  website showcasing a selected few of the websites I have built since 2020"
        />
        <Home />
      </>
    );
  }
};

export default index;
