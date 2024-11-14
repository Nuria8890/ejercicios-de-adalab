import "../styles/App.scss";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const handleIncrease = () => {
    setNumber(number + 1);
  };

  const handleReduce = () => {
    setNumber(number - 1);
  };

  const handleReset = () => {
    setNumber(0);
  };
  return (
    <>
      <p>Contador: {number}</p>
      <button onClick={handleIncrease}>Incrementa el valor</button>
      <br />
      <button onClick={handleReduce}>Reduce el valor</button>
      <br />
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default App;
