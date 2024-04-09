import { PropTypes } from "prop-types";
import { useState } from "react";
import { LeftArrow, RightArrow } from "../Assets/ArrowIcons";
import "./ImageGallery.css";

const ImageGallery = ({ images, documentType }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = (event) => {
    if (event.target.classList.contains("modalBackdrop")) {
      setOpenModal(false);
    }
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(images.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === images.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  return (
    <div>
      {openModal ? (
        <div className="modalBackdrop flex" onClick={handleCloseModal}>
          <div className="navigationArrow gridCenter" onClick={prevSlide}>
            {/* <button> &lt; </button> */}
            <LeftArrow />
          </div>
          <div className="modalImage">
            <img src={images[slideNumber].img} alt="" />
          </div>
          <div className="navigationArrow gridCenter" onClick={nextSlide}>
            {/* <button> &gt; </button> */}
            <RightArrow />
          </div>
        </div>
      ) : null}

      <div className="galleryContainer">
        {images &&
          images.map((slide, index) => {
            return (
              <div
                className="singleImage"
                key={index}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.img} alt={documentType} loading="lazy"/>
              </div>
            );
          })}
      </div>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
  documentType: PropTypes.string.isRequired,
};

export default ImageGallery;
