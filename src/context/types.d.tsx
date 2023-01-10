export type ProjectType = {
  id: string;
  url: string;
  title: string;
  slug: string;
  description: string[];
  mainProgram: string;
  dependencies: string[];
};

export type AllImageType = {
  gatsbyImageData: any;
  original: { src: string };
};
