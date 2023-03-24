import "./hideOnScroll.css";
import React, { useState, useEffect } from 'react';
import NavGroup from './scrollButton.jsx';

export default function hide() {
  const [navColor, setNavColor] = useState(false);

  const changeNavColor = e => {
    window.scrollY >= 100 ? setNavColor(true) : setNavColor(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavColor);
    return () => {
      window.removeEventListener('scroll', changeNavColor);
    };
  }, []);

  return (
    <div
      style={{
        height: '200vh',
        border: '2px solid yellow',
        overflow: 'scroll',
        color:"purple"
      }}
    >
      <NavGroup {...(navColor ? { backgroundColor: '#0008' } : {})} />
    </div>
  );
}

