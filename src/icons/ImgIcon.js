/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';

const ImgIcon = (props) => {
  const { name, size } = props;
  const srcPath = `/static/icons/menu/${name}.png`;
  return (
    <img
      style={{
        height: size || 30, width: 'auto', verticalAlign: 'middle', margin: 'auto'
      }}
      src={srcPath}
      alt={name}
    />
  );
};

export default ImgIcon;
