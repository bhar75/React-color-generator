import React, { useState } from "react";
import SingleColor from "./SingleColor";

//external library
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={error ? "error" : null}
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" className="btn">
            generate
          </button>
        </form>
      </section>
      <section className="colors">
        <h4>colors go here</h4>
      </section>
    </>
  );
}

export default App;
