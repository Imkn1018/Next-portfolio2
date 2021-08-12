import React from 'react';
import * as styles from '../../styles/SectionHeader.module.scss';

export const SectionHeader = ({ title }) => {
  return <h6 className={styles.sectionHeader}>{title}</h6>;
};
