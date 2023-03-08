import React from 'react';

const Button = ({ size, style, url, isDisabled, text }) => {
  const buttonStyle = `btn btn--${style} btn--${size} ${isDisabled ? 'disabled' : ''}`;
  
  if (url) {
    return (
      <a href={url} className={buttonStyle}>
        {text}
      </a>
    );
  }

  return (
    <button className={buttonStyle} disabled={isDisabled}>
      {text}
    </button>
  );
};

export default Button;
