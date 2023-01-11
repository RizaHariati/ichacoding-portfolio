import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { ShowModalType } from "../../context/types.d";
import { GatsbyImage } from "gatsby-plugin-image";

type Props = {
  showModal: ShowModalType;
  setShowModal: React.Dispatch<React.SetStateAction<ShowModalType>>;
};

const ImageModal = ({ showModal, setShowModal }: Props) => {
  return (
    <div className={showModal ? "modal-base-show" : "modal-base-hide"}>
      <div className="modal-container">
        <div className="modal-image-website ">
          <GatsbyImage
            image={showModal.value[0]}
            objectFit="fill"
            className="h-full"
            objectPosition="center"
            alt="image short"
            loading="eager"
          />
        </div>
        <div className="modal-image-phone ">
          <GatsbyImage
            image={showModal.value[1]}
            objectFit="fill"
            className="h-full mx-auto w-48"
            objectPosition="center"
            alt="image short"
            loading="eager"
          />
        </div>
        <button
          className="close-btn"
          onClick={() =>
            setShowModal({
              status: false,
              type: "",
              value: [],
            })
          }
        >
          <FontAwesomeIcon icon={faTimesCircle} />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
