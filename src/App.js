import logo from "./logo.svg";
import "./App.scss";
import { useState } from "react";
import Form from "./components/Form";
import Jokes from "./components/Jokes";

function App() {
  const [jokes, setJokes] = useState([]);

  return (
    <div className="App">
      <h1>Chuck Norris Jokes Generator</h1>
      <Form setJokes={setJokes} />
      <Jokes jokes={jokes} />
    </div>
  );
}

export default App;
