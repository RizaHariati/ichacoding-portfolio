import { getImage } from "gatsby-plugin-image";
import { AllImageType } from "../context/types.d";
export const getGatsbyImage = (
  imageName: string,
  allImages: AllImageType[]
) => {
  const findImage = allImages.find((image: AllImageType) => {
    return image.original.src.includes(imageName);
  });
  if (findImage) {
    return getImage(findImage.gatsbyImageData);
  }
};
