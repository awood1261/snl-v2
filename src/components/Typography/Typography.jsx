import React from 'react';

const Typography = ({ variant, element: Element, children }) => {

  return <Element className={variant}>{children}</Element>;
};

export default Typography;
