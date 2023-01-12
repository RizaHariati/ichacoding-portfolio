import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allImageSharp(
      filter: {
        original: {
          src: { eq: "/static/snippet-e2e0fda756cde729ad38bab71bc96e3b.png" }
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
    image: `${metaData.url}${siteImage}`,
    url: `${metaData.url}`,
  };

  return (
    <>
      <title>IchaCodes | {seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

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
    <p className="-z-20 fixed left-1/2">IchaCodes by Riza hariati </p>
  </SEO>
);
