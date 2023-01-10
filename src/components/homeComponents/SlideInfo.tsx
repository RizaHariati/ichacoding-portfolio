import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

type Props = {
  imageData: any;
  title: string;
  description: string[];
  mainProgram: string;
  url: string;
};

const SlideInfo = ({
  imageData,
  title,
  description,
  mainProgram,
  url,
}: Props) => {
  return (
    <div className="slide-base">
      <div className="slide-phone">
        <GatsbyImage
          image={imageData.phone}
          objectFit="fill"
          className=" h-52  2xl:h-72 "
          objectPosition="center"
          alt={title}
        />
      </div>

      <div className="slide-info">
        <h5 className="font-semibold">{title}</h5>
        <p className="slide-description">{description[0].slice(0, 200)}</p>
        <p className="font-medium">Main Program : {mainProgram}</p>
        <div className="w-full flex gap-2 mt-1">
          <button className="standard-btn">
            <FontAwesomeIcon icon={faInfoCircle} />
            More...
          </button>
          <a href={url} className="standard-btn">
            <FontAwesomeIcon icon={faPaperPlane} />
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default SlideInfo;
