import React, { useCallback, useState } from "react";
import "../src/styles/OffersSection.css";
import Offer from "./Offer";
import space1 from "../src/images/space1.png";
import space2 from "../src/images/space2.png";
import space3 from "../src/images/space3.png";
import space4 from "../src/images/space4.png";
import Modal from "./Modal";

export default function OffersSection() {
  const offers = [
    {
      offerTitle: "Move the borders of reality!",
      offerBody: "Go on a space adventure - it's possible with us!",
      backgroundImage: `${space1}`,
    },
    {
      offerTitle: "Space is not just stars and planets",
      offerBody: "Go on a space adventure",
      backgroundImage: `${space3}`,
    },
    {
      offerTitle: "For those who dream of stars",
      offerBody: "Our offer: make your dream come true",
      backgroundImage: `${space4}`,
    },
    {
      offerTitle: "Fulfill your fantastic dreams",
      offerBody: "Space has never been so close",
      backgroundImage: `${space2}`,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div className="offers-section">
      <span className="offers-section__footer-title">Offers</span>
      <div className="offers-section__container">
        {offers.map((offer, index) => (
          <Offer
            key={index}
            offerTitle={offer.offerTitle}
            offerBody={offer.offerBody}
            backgroundImage={offer.backgroundImage}
          />
        ))}
        <div className="offers-section__footer-container">
          <span className="offers-section__footer-title">
            Embark on a space journey
          </span>
          <span className="offers-section__footer-description">
            Travelling into space is one of the most exciting and unforgettable
            adventures that can change your life forever. And if you have ever
            dreamed of exploring stars, planets and galaxies, then our company
            is ready to help you realize this dream. We offer a unique
            experience that will allow you to go on a space journey and see all
            the secrets of the universe. We guarantee that every moment in space
            will be filled with incredible impressions, excitement and new
            discoveries. Our team of professionals takes care of your safety and
            comfort so that you can fully enjoy your adventure in space. We
            offer various options for space excursions.
          </span>
          <button href="#" className="read-more__button" onClick={openModal}>
            Read more
          </button>
          {isModalOpen && (
            <Modal
              onClose={handleCloseModal}
              title="MAKING LIFE MULTIPLANETARY"
              description="All Dragon and Starship missions have the ability to conduct scientific research to improve life back on Earth as well as raise awareness to a global audience.              "
            />
          )}
        </div>
      </div>
    </div>
  );
}
