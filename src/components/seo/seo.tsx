import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allImageSharp(
      filter: {
        original: {
          src: { eq: "/static/snippet-74369e8eba0e47320939dc2434a2fdc2.png" }
        }
      }
    ) {
      nodes {
        gatsbyImageData
        original {
          src
        }
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
        owner
        image
        description
      }
    }
  }
`;

type Props = {
  title: string;
  description: string;
  children: JSX.Element | JSX.Element[];
};

export const SEO = ({ title, description, children }: Props) => {
  const result = useStaticQuery(query);
  const metaData = result.site.siteMetadata;
  const imageStatic = result.allImageSharp;
  const siteImage = imageStatic.nodes[0].gatsbyImageData.images.fallback.src;

  const seo = {
    title: title || "Home",
    description: description || "",
    image: `${metaData.image}`,
    url: `${metaData.url}`,
  };

  return (
    <>
      <title>IchaCodes | {seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:image" content={seo.image} />

      {children}
    </>
  );
};

type HeadProps = {
  title: string;
  description: string;
};
export const Head = ({ title, description }: HeadProps) => (
  <SEO title={title} description={description}>
    <p className="-z-10 fixed left-1/2 -translate-x-1/2 text-center top-2 text-xs flex flex-row gap-4 w-full"></p>
  </SEO>
);
