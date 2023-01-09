import React, { useEffect } from "react";
import {
  graphql,
  HeadProps,
  navigate,
  PageRendererProps,
  StaticQueryProps,
} from "gatsby";
import { PageProps } from "gatsby";
import { useGlobalContext } from "../context/AppProvider";
import LoadingPage from "../components/LoadingPage";
import Home from "../components/Home";
import { PictureProps } from "gatsby-plugin-image/dist/src/components/picture";
type Props = {
  data: any;
};
const index = ({ data }: Props) => {
  const {
    dispatch,
    state: { allImages },
  } = useGlobalContext();

  useEffect(() => {
    if (allImages.length < 1) {
      setTimeout(() => {
        dispatch({
          type: "SET_ALL_IMAGES",
          payload: {
            allImages: data?.allImageSharp.nodes,
          },
        });
      }, 1500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (allImages.length < 1) {
    return <LoadingPage />;
  } else {
    return <Home />;
  }
};

export default index;

export const result = graphql`
  query MyQuery {
    allImageSharp {
      nodes {
        gatsbyImageData(height: 400, placeholder: TRACED_SVG)
        original {
          src
        }
      }
    }
  }
`;
