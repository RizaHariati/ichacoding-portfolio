import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShowModalType } from "../../context/types.d";
import { GatsbyImage } from "gatsby-plugin-image";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

type Props = {
  showModal: ShowModalType;
  setShowModal: React.Dispatch<React.SetStateAction<ShowModalType>>;
};

const ImageModal = ({ showModal, setShowModal }: Props) => {
  return (
    <div className={showModal ? "modal-base-show" : "modal-base-hide "}>
      <div className="modal-content">
        <div
          className="modal-container"
          style={
            window.innerWidth < 450 || window.innerHeight < 450
              ? { width: 310 }
              : { width: "fit-content" }
          }
        >
          <div className="modal-image-website ">
            <GatsbyImage
              image={showModal.value[0]}
              objectFit="cover"
              className="w-full"
              objectPosition="center"
              alt="image short"
              loading="eager"
            />
          </div>
          <div className="modal-image-phone ">
            <GatsbyImage
              image={showModal.value[1]}
              objectFit="cover"
              className="w-full "
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
            <FontAwesomeIcon icon={faTimesCircle} className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
