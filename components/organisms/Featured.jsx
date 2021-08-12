import React from 'react';
import photos from '../../data/photos';
import * as styles from '../../styles/Feature.module.scss';

export const Featured = () => {
  const [firstImage, secondImage] = photos;
  return (
    <section className={styles.featuredSection} data-scroll-section>
      <div className={styles.featuredRowLayout}>
        <h6>green</h6>
        <img src={firstImage} data-scroll />
      </div>
      <div className={styles.featuredColumnLayout}>
        <h6>lily</h6>
        <img src={secondImage} data-scroll />
      </div>
    </section>
  );
};
