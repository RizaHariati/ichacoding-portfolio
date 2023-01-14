import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allImageSharp(
      filter: {
        original: {
          src: {
            eq: "/static/samplebackground-aa31c6084ccde8e59c292e69af1cc9d1.png"
          }
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
    image: `${metaData.siteUrl}${siteImage}`,
    url: `${metaData.siteUrl}`,
    owner: `${metaData.owner}`,
  };

  return (
    <>
      <title>IchaCodes | {seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta name="image" content={`${seo.image}`} />
      <meta property="og:image" content={`${seo.image}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.owner} />
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
