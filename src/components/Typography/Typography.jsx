import React from 'react';
import './typography.css';

const Typography = ({ variant, element: Element, children }) => {

  return <Element className={variant}>{children}</Element>;
};

export default Typography;
