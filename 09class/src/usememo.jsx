
import React, { useState, useMemo } from 'react';

const ExampleComponent = ({ a, b }) => {
  // Define a function that calculates the sum of two numbers
  const sum = (a, b) => {
    console.log('Calculating sum...');
    return a + b;
  };

  // Use useMemo to memoize the result of the sum function
  const result = useMemo(() => sum(a, b), [a, b]);

  return (
    <div>
      <p>Value of a: {a}</p>
      <p>Value of b: {b}</p>
      <p>Result of sum: {result}</p>
    </div>
  );
};

const App = () => {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);

  const handleChangeA = (e) => {
    setValueA(parseInt(e.target.value));
  };

  const handleChangeB = (e) => {
    setValueB(parseInt(e.target.value));
  };

  return (
    <div>
      <h1>useMemo Example</h1>
      <label>
        Value of a:
        <input type="number" value={valueA} onChange={handleChangeA} />
      </label>
      <br />
      <label>
        Value of b:
        <input type="number" value={valueB} onChange={handleChangeB} />
      </label>
      <br />
      <ExampleComponent  />
    </div>
  );
};
export default  App
