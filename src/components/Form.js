import { useState } from "react";

const Form = ({ setJokes }) => {
  const [category, setCategory] = useState("random"),
    [numberOfJokes, setNumberOfJokes] = useState(1),
    [isFetching, setIsFetching] = useState(false),
    [error, setError] = useState(false),
    // Example url. 1 random, explicit joke
    // http://api.icndb.com/jokes/random/1?limitTo=[explicit]";
    API_BASE_URL = "https://api.icndb.com/jokes/random/";
  let fetchUrl = `${API_BASE_URL}`;

  const handleSubmit = (e) => {
    // Show the spinner
    setIsFetching(true);
    // If category is just "random", just append the numberOfJokes at the end of the URL
    if (category === "random") {
      fetchUrl += numberOfJokes;
    } else {
      // do the above and specify which category.
      fetchUrl += `${numberOfJokes}?limitTo=[${category}]`;
    }

    // Get the jokes
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        // The "value" property contains the array of jokes.
        setJokes(data.value);
      })
      .catch(() => {
        setError(true);
        // After ~3.5s, hide the error and the loading spinner
        setTimeout(() => {
          setError(false);
          setIsFetching(false);
        }, 3500);
      });
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>

      <div id="category">
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
      </div>

      <div id="num-of-jokes"> 
        <label>How many jokes?</label>
        <input
          type="number"
          min="1"
          max="100"
          step
          value={numberOfJokes}
          onChange={(e) => setNumberOfJokes(e.target.value)}
        />
      </div>

      {/* Display a message depending on a range of jokes, before submitting. Just joking around; don't mind this. */}
      {numberOfJokes >= 30 && numberOfJokes < 60 && <small>Someone's got some free time, huh?</small>}
      {numberOfJokes >= 60 && numberOfJokes != 69 && numberOfJokes < 100 && <small>Damn, you really are looking for a laugh</small>}
      {numberOfJokes == 69 && <small>Nice</small>}
      {numberOfJokes == 100 && <small>Chuck would be proud of you, but let's keep it a 100 at a time, shall we? <br/>Do tell me if you made it this far, tho</small>}

      {/* Show an error if there is one when getting the jokes*/}
      {error && <small id="error">There's been an error while getting the jokes. Try again!</small>}

      <input type="submit" value="Get jokes" className="btn" id="fetch-btn"/>

      {/* If it's getting the jokes, show the "loading" spinner */}
      {isFetching && 
      <div id="spinner">
        <div></div>
        <div></div>
      </div>}
    </form>
  );
};

export default Form;
