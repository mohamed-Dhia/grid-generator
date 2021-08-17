import React, {
  useState,
  ChangeEventHandler,
  MouseEventHandler,
  useRef,
} from 'react';
import reactComponentExportImage from 'react-component-export-image';

import GridElement from './GridElement';
import './App.css';

interface AppProps {}

const App = ({}: AppProps) => {
  const [n, setN] = useState<string>('');
  const [grid, setGrid] = useState<number[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setGrid([]);
      setN(value);
    }
  };

  const getRandomInt = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const handleClick: MouseEventHandler<HTMLButtonElement> = () =>
    n && setGrid(Array.from({ length: +n }, () => getRandomInt(-100, 100)));

  return (
    <div className="app-container">
      <div className="input-container">
        <input
          className="grid-size-input"
          type="text"
          value={n}
          onChange={handleChange}
          placeholder="Pick Your Grid Size"
        />
        <div className="btn-container">
          <button className="btn" type="button" onClick={handleClick}>
            Generate
          </button>
          {!!grid.length && (
            <button
              onClick={() =>
                reactComponentExportImage.exportComponentAsJPEG(gridRef, {
                  fileName: `${n}-grid`,
                })
              }
            >
              Export As JPEG
            </button>
          )}
        </div>
      </div>
      <div className="grid-container" ref={gridRef}>
        {grid.map((GridElementValue, i) => (
          <GridElement key={`${i}${n}`} n={GridElementValue} />
        ))}
      </div>
    </div>
  );
};

export default App;
