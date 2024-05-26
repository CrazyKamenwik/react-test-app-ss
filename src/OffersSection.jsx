import React from "react";
import styles from "../src/OffersSection.module.css";
import Offer from "./Offer";
import space1 from "../src/images/space1.png";
import space2 from "../src/images/space2.png";
import space3 from "../src/images/space3.png";
import space4 from "../src/images/space4.png";

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
      offerTitle: "For those who dream of stars ",
      offerBody: "Our offer: make your dream come true",
      backgroundImage: `${space4}`,
    },
    {
      offerTitle: "Fulfill your fantastic dreams",
      offerBody: "Space has never been so close",
      backgroundImage: `${space2}`,
    },
  ];
  return (
    <div className={styles.offersSection}>
      <span className={styles.offersFooterTitle}>Offers</span>
      <div className={styles.offersContainer}>
        {offers.map((offer, index) => (
          <Offer
            key={index}
            offerTitle={offer.offerTitle}
            offerBody={offer.offerBody}
            backgroundImage={offer.backgroundImage}
          />
        ))}
        <div className={styles.offersFooterContainer}>
          <span className={styles.offersFooterTitle}>
            Embark on a space journey
          </span>
          <span className={styles.offersFooterDescription}>
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
          <a href="#" className={styles.link}>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
