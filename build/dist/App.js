import React, {
  useState,
  useRef
} from "../_snowpack/pkg/react.js";
import reactComponentExportImage from "../_snowpack/pkg/react-component-export-image.js";
import GridElement from "./GridElement.js";
import "./App.css.proxy.js";
const App = ({}) => {
  const [n, setN] = useState("");
  const [grid, setGrid] = useState([]);
  const gridRef = useRef(null);
  const handleChange = ({
    target: {value}
  }) => (value === "" || /^[0-9\b]+$/.test(value)) && setN(value);
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const handleClick = () => n && setGrid(Array.from({length: +n}, () => getRandomInt(-100, 100)));
  return /* @__PURE__ */ React.createElement("div", {
    className: "app-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input-container"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "grid-size-input",
    type: "text",
    value: n,
    onChange: handleChange,
    placeholder: "Pick Your Grid Size"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "btn-container"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn",
    type: "button",
    onClick: handleClick
  }, "Generate"), !!grid.length && /* @__PURE__ */ React.createElement("button", {
    onClick: () => reactComponentExportImage.exportComponentAsJPEG(gridRef, {
      fileName: `${n}-grid`
    })
  }, "Export As JPEG"))), /* @__PURE__ */ React.createElement("div", {
    className: "grid-container",
    ref: gridRef
  }, grid.map((GridElementValue, i) => /* @__PURE__ */ React.createElement(GridElement, {
    key: `${i}${n}`,
    n: GridElementValue
  }))));
};
export default App;
