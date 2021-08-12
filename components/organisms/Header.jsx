import React, { useEffect, useRef, useState } from 'react';

import gsap from 'gsap';
import SplitText from '../../utils/Split3.min';

import * as styles from '../../styles/Header.module.scss';

export const Header = () => {
  useEffect(() => {
    const split = new SplitText('#header-text', {
      type: 'lines',
      linesClass: 'lineChildren',
    });

    const splitParent = new SplitText('#header-text', {
      type: 'lines',
      linesClass: `lineParent`,
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2',
    });
  }, []);
  return (
    <section className={styles.headerContainer} data-scroll-section>
      <ul className={styles.headerMenu}>
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id="header-text">Art Objects</h1>
    </section>
  );
};
