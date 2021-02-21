import logo from "./logo.svg";
import "./App.scss";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("random"),
    [numberOfJokes, setNumberOfJokes] = useState(1),
    [jokes, setJokes] = useState([]),
    // Example url. 1 random, explicit joke
    // API_URL = "http://api.icndb.com/jokes/random/1?limitTo=[explicit]";
    // API_URL = "http://api.icndb.com/jokes/random/<number>?limitTo=[<array including "nerdy" and/or "explicit">]";
    API_BASE_URL = "http://api.icndb.com/jokes/random/";
  let fetchUrl = `${API_BASE_URL}`;

  const handleSubmit = (e) => {
    console.log(`The category is ${category}`);
    console.log(`The numberOfJokes is ${numberOfJokes}`);

    // If category is just "random", just append the numberOfJokes at the end of the URL
    if (category === "random") {
      fetchUrl += numberOfJokes;
    } else {
      // do the above and specify which category.
      fetchUrl += `${numberOfJokes}?limitTo=[${category}]`;
    }

    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        // The "value" property contains the array of jokes.
        setJokes(data.value);
      });
    e.preventDefault();
  };

  return (
    <div className="App">
      <h1>Cosa horrorosa ahí o verás</h1>
      <form onSubmit={handleSubmit}>
        <label>Which category?</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          name="category"
        >
          <option value="random">Random</option>
          <option value="nerdy">Nerdy</option>
          <option value="explicit">Explicit</option>
          <option value="nerdy,explicit">Nerdy/Explicit</option>
        </select>
        <label>How many jokes?</label>
        <input
          type="number"
          value={numberOfJokes}
          onChange={(e) => setNumberOfJokes(e.target.value)}
        />
        <input type="submit" value="Get jokes" />
      </form>
      {/* Outputting vars */}
      <h2>{category}</h2>
      <h2>{numberOfJokes}</h2>
      {/* If there ARE jokes, render them, of course. */}
      {jokes &&
        jokes.map((joke) => (
          <h2 className="joke" key={joke.id}>
            {joke.joke}
          </h2>
        ))}
    </div>
  );
}

export default App;
