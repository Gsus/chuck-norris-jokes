import logo from "./logo.svg";
import "./App.scss";
import { useState } from "react";
import Form from "./components/Form";
import Jokes from "./components/Jokes";

function App() {
  const [jokes, setJokes] = useState(null);

  return (
    <div className="App">
      <h1>Chuck Norris Jokes Generator</h1>
      { /* If there aren't jokes, render the form,
      Otherwise, show the jokes. */}
      {!jokes ? <Form setJokes={setJokes} /> : 
        <Jokes 
          jokes={jokes} 
          resetJokes={() => setJokes(null)}
        />
      }


      {/* {!jokes && <Form setJokes={setJokes} />} */}
      {/* {jokes && <Jokes jokes={jokes} resetJokes={() => setJokes(null)}/>} */}
    </div>
  );
}

export default App;
