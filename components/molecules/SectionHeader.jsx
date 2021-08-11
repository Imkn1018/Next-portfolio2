import React from 'react';
import '../../styles/SectionHeader.module.scss';

export const SectionHeader = ({ title }) => {
  return <h6 className="section-header">{title}</h6>;
};
