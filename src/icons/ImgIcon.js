/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';

const ImgIcon = (props) => {
  const { name, size, style } = props;
  const srcPath = `/static/icons/${name}.png`;
  return (
    <img
      style={{
        height: size || 20, width: 'auto', verticalAlign: 'middle', margin: 'auto', ...style
      }}
      src={srcPath}
      alt={name}
    />
  );
};

export default ImgIcon;
