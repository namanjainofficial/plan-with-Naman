import { useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import data from "./data";

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tour Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Reset</button>
      </div>
    );
  }
  return (
    <div className="app">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
