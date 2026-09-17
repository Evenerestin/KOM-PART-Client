import { PropTypes } from "prop-types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  CloseIcon,
  LeftArrow,
  RightArrow,
  ZoomIcon,
} from "../Assets/ArrowIcons";
import "./ImageGallery.css";

const extractYear = (text) => {
  const matches = text.match(/\b(19|20)\d{2}\b/g);
  return matches ? Number(matches[matches.length - 1]) : null;
};

const KICKER_PATTERNS = [
  [/ambasador/i, "Wyróżnienie"],
  [/dyplom/i, "Dyplom"],
  [/podzi[eę]kowanie/i, "Podziękowanie"],
  [/[żz]yczenia/i, "Życzenia"],
];

const getKicker = (text) => {
  const match = KICKER_PATTERNS.find(([pattern]) => pattern.test(text));
  return match ? match[1] : null;
};

const ImageGallery = ({ images, documentType }) => {
  const timeline = useMemo(
    () =>
      (images ?? [])
        .map((item) => ({ ...item, year: extractYear(item.alt) }))
        .sort(
          (a, b) =>
            (b.year ?? Number.NEGATIVE_INFINITY) -
            (a.year ?? Number.NEGATIVE_INFINITY),
        ),
    [images],
  );

  const groups = useMemo(() => {
    const result = [];
    timeline.forEach((item, index) => {
      const currentGroup = result[result.length - 1];
      if (
        currentGroup &&
        currentGroup.year != null &&
        currentGroup.year === item.year
      ) {
        currentGroup.items.push({ ...item, index });
      } else {
        result.push({ year: item.year, items: [{ ...item, index }] });
      }
    });
    return result;
  }, [timeline]);

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const triggerRef = useRef(null);
  const closeButtonRef = useRef(null);

  const handleOpenModal = (index) => {
    triggerRef.current = document.activeElement;
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      handleCloseModal();
    }
  };

  const prevSlide = useCallback(() => {
    setSlideNumber((current) =>
      current === 0 ? timeline.length - 1 : current - 1,
    );
  }, [timeline.length]);

  const nextSlide = useCallback(() => {
    setSlideNumber((current) =>
      current + 1 === timeline.length ? 0 : current + 1,
    );
  }, [timeline.length]);

  useEffect(() => {
    if (!openModal) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
      triggerRef.current = null;
    };
  }, [openModal, handleCloseModal, prevSlide, nextSlide]);

  return (
    <div>
      {openModal ? (
        <div
          className="modalBackdrop"
          onClick={handleBackdropClick}
          role="dialog"
          aria-modal="true"
          aria-label={`Podgląd: ${timeline[slideNumber].alt}`}
        >
          <button
            type="button"
            className="modalClose"
            onClick={handleCloseModal}
            aria-label="Zamknij podgląd"
            ref={closeButtonRef}
          >
            <CloseIcon />
          </button>

          <button
            type="button"
            className="navigationArrow navigationArrow--prev"
            onClick={prevSlide}
            aria-label="Poprzednie zdjęcie"
          >
            <LeftArrow />
          </button>

          <div className="modalContent">
            <div className="modalImage">
              <img
                src={timeline[slideNumber].img}
                alt={timeline[slideNumber].alt}
              />
            </div>
            <div className="modalCaption">
              <p className="modalCaptionText">{timeline[slideNumber].alt}</p>
              <span className="modalCounter">
                {slideNumber + 1} / {timeline.length}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="navigationArrow navigationArrow--next"
            onClick={nextSlide}
            aria-label="Następne zdjęcie"
          >
            <RightArrow />
          </button>
        </div>
      ) : null}

      <div className="galleryContainer" aria-label={`Galeria: ${documentType}`}>
        {groups.map((group) => {
          const isFeatured = group.items.length === 1;
          const kicker = isFeatured ? getKicker(group.items[0].alt) : null;
          return (
            <div className="milestone" key={group.year ?? group.items[0].img}>
              <div className="nodeDot" />
              <div className={isFeatured ? "galleryCard featured" : "galleryCard"}>
                <p className="yearBadge">{group.year ?? ""}</p>
                {isFeatured ? (
                  <button
                    type="button"
                    className="featureItem"
                    onClick={() => handleOpenModal(group.items[0].index)}
                  >
                    <div className="featureThumb">
                      <img
                        src={group.items[0].img}
                        alt={group.items[0].alt}
                        loading="lazy"
                      />
                      <span className="featureThumbHint" aria-hidden="true">
                        <ZoomIcon />
                      </span>
                    </div>
                    <span className="featureDivider" aria-hidden="true" />
                    <div className="featureBody">
                      {kicker ? <p className="featureKicker">{kicker}</p> : null}
                      <p className="featureCaption">{group.items[0].alt}</p>
                    </div>
                  </button>
                ) : (
                  <div className="itemsRow">
                    {group.items.map((item) => (
                      <button
                        type="button"
                        className="subItem"
                        key={item.img}
                        onClick={() => handleOpenModal(item.index)}
                      >
                        <div className="thumb">
                          <img src={item.img} alt={item.alt} loading="lazy" />
                          <span className="thumbHint" aria-hidden="true">
                            <ZoomIcon />
                          </span>
                        </div>
                        <p className="caption">{item.alt}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
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
      alt: PropTypes.string.isRequired,
    }),
  ).isRequired,
  documentType: PropTypes.string.isRequired,
};

export default ImageGallery;
