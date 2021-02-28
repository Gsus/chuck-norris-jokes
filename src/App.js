import "./App.scss";
import ChuckImg from './ChuckNorrisPointing.png';
import { useState } from "react";
import Form from "./components/Form";
import Jokes from "./components/Jokes";

function App() {
  const [jokes, setJokes] = useState(null);

  return (
    <div className="App">
      <small id="author">Coded by <a href="https://gsus.github.io/" target="_blank">Jesús Sánchez B.</a></small>

      <h1>Chuck Norris Jokes Generator</h1>
      { /* If there aren't jokes, render the form,
      Otherwise, show the jokes. */}
      {!jokes ? <Form setJokes={setJokes} /> : 
        <Jokes 
          jokes={jokes} 
          resetJokes={() => setJokes(null)}
        />
      }
      <img src={ChuckImg} id="chuck-pointing-img" alt="Chuck Norris dressed like a sheriff, pointing and looking at the camera, like softly warning the viewer"/>
    </div>
  );
}

export default App;
