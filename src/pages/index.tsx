import React from "react";
import { useGlobalContext } from "../context/AppProvider";
import LoadingPage from "../components/LoadingPage";
import Home from "../components/Home";
type Props = {};
const index = (props: Props) => {
  const {
    state: { allImages },
  } = useGlobalContext();

  if (!allImages || (allImages && Object.keys(allImages).length < 1)) {
    return <LoadingPage />;
  } else {
    return <Home />;
  }
};

export default index;
