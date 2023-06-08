import React from 'react';

const Header = (prop) => {
  const { title } = prop;
  return (
    <div><h1 className="header">{title}</h1></div>
  );
};

export default Header;
