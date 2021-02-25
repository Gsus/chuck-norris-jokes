import fist from '../fist.svg';
// HTML entity encoder/decoder
import he from 'he';

const Jokes = ({ jokes, resetJokes }) => {
  return (
    <div>
      <button onClick={resetJokes} className="btn">Get new jokes</button>
      <div id="jokes">
        {jokes.map((joke) => (
        <div className="joke" key={joke.id}>
          <img src={fist} alt="Fist icon" className="icon"/>
          <p className="joke-text">
            {he.decode(joke.joke)}
          </p>
        </div>
        ))}
      </div>
    </div>
  )
};

export default Jokes;