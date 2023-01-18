import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const query = graphql`
  {
    allImageSharp(
      filter: {
        original: {
          src: {
            in: [
              "/static/samplebackground-aa31c6084ccde8e59c292e69af1cc9d1.png"
            ]
          }
        }
      }
    ) {
      nodes {
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
  const siteImage = imageStatic.nodes[0].original.src;

  const seo = {
    title: title || "Project",
    description: description || `${metaData.description}`,
    image: `${metaData.siteUrl}${siteImage}`,
    url: `${metaData.siteUrl}`,
    owner: `${metaData.owner}`,
  };

  return (
    <>
      <title>{`IchaCodes | ${seo.title}`}</title>
      <meta property="og:description" content={seo.description} />
      <meta name="keywords" content="rizahariati, riza hariati, icha hariati" />
      <meta property="og:image" content={`${seo.image}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta name="twitter:creator" content={seo.owner} />
      <link rel="canonical" href={seo.url} />
      {children}
    </>
  );
};
