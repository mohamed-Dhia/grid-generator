import React from "../_snowpack/pkg/react.js";
import "./gridElement.css.proxy.js";
const GridElement = ({n}) => {
  let r, g;
  if (n >= 0) {
    r = 0;
    g = Math.ceil(-2.55 * n + 255);
  } else {
    r = Math.ceil(-2.55 * n);
    g = 255;
  }
  return /* @__PURE__ */ React.createElement("svg", {
    className: "grid-item",
    width: "25",
    height: "25",
    style: {
      background: `rgb(${255 - r},${g},0)`
    }
  });
};
export default GridElement;
