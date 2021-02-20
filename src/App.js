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
      console.log("Random option selected");
      fetchUrl += numberOfJokes;
      console.log(fetchUrl);
    }

    // fetch(`${fetchUrl}`)
    //   .then((res) => res.json())
    //   .then((data) => setJokes(data.value.joke));
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
          {/* http://api.icndb.com/jokes/random/<number> */}
          <option value="nerdy">Nerdy</option>
          {/* <number>?limitTo=[nerdy] */}
          <option value="explicit">Explicit</option>
          {/* <number>?limitTo=[explicit] */}
          <option value="nerdy,explicit">Nerdy/Explicit</option>
          {/* <number>?limitTo=[nerdy,explicit] */}
        </select>

        <label>How many jokes?</label>
        <input
          type="number"
          value={numberOfJokes}
          onChange={(e) => setNumberOfJokes(e.target.value)}
        />

        <input type="submit" value="Get jokes" />

        {/* Outputting vars */}
        <h2>{category}</h2>
        <h2>{numberOfJokes}</h2>
        {/* {jokes && (jokes.map((joke) => {
          <h2 className="joke">{joke}</h2>;
        }))} */}
      </form>
    </div>
  );
}

export default App;
