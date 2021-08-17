import React, { FC } from 'react';
import './gridElement.css';

interface GridElementProps {
  n: number;
}

// n is between 100 and -100
// at 100 the color of the cell should be #FF0000(red) which is rgb(255,0,0)
// at -100 the color of the cell should be #00FF00(green) which is rgb(0,255,0)
// at 0 the the color of the cell should be #FFFF00(yellow) the inbetween of red and green which is rgb(255,255,0)

const GridElement: FC<GridElementProps> = ({ n }) => {
  let red: number, green: number;
  if (n >= 0) {
    red = 0;
    green = Math.ceil(-2.55 * n + 255); // this equation goes from a maximum of 255 down to 0 gradually for the green value
  } else {
    red = Math.ceil(-2.55 * n); // this equation goes from a maximum of 255 down to 0 gradually for the red value
    green = 255;
  }
  return (
    <svg
      className="grid-item"
      width="25"
      height="25"
      style={{
        background: `rgb(${255 - red},${green},0)`,
      }}
    ></svg>
  );
};

export default GridElement;
