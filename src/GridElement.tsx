import React from 'react';
import './gridElement.css';

interface GridElementProps {
  n: number;
}

const GridElement = ({ n }: GridElementProps) => {
  let r: number, g: number;
  if (n >= 0) {
    r = 0;
    g = Math.ceil(-2.55 * n + 255);
  } else {
    r = Math.ceil(-2.55 * n);
    g = 255;
  }
  return (
    <svg
      className="grid-item"
      width="25"
      height="25"
      style={{
        background: `rgb(${255 - r},${g},0)`,
      }}
    ></svg>
  );
};

export default GridElement;
