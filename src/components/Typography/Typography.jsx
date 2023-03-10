import React from 'react';
import './typography.css';

const Typography = ({ variant, element: Element, className, children }) => {

  return <Element className={`${variant} ${className}`}>{children}</Element>;
};

export default Typography;
