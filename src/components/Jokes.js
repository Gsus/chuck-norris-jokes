const Jokes = ({ jokes }) => {
  return (
    // If there ARE jokes, render them, of course.
    jokes &&
    jokes.map((joke) => (
      <h2 className="joke" key={joke.id}>
        {joke.joke}
      </h2>
    ))
  );
};

export default Jokes;