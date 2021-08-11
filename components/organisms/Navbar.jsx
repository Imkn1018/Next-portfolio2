import React from 'react';
import * as styles from '../../styles/Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={styles.navbar} data-scroll-section>
      <div>menu</div>

      <div>Flirty Flowers</div>

      <div>cart</div>
    </div>
  );
};
