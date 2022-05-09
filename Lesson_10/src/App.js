import { useState, useEffect } from "react";
import CharacterInfo from "./components/CharacterInfo";

function App() {
  const [characters, setCharacters] = useState([]);
  const [characterInfo, setCharacterInfo] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoadign] = useState(false);
  const [moreInfo, setMoreInfo] = useState(true);

  useEffect(() => {
    setLoadign(true);
    fetch("https://swapi.dev/api/people")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => setCharacters(data.results))
      .catch((error) => setError(error.message))
      .finally(() => setLoadign(false));
  }, []);

  return (
    <main className="container">
      <div className="characters-list">
        {loading ? (
          <h1>Loading ... Getting characters</h1>
        ) : (
          characters.map((character) => (
            <button
              className="button"
              key={character.height}
              onClick={() => {
                setMoreInfo(false);
                setCharacterInfo(character);
              }}
            >
              {character.name}
            </button>
          ))
        )}
        {error && <h2>{error}</h2>}
      </div>
      <div className="results">
        {moreInfo ? <h1>Click character name for more info</h1> : <CharacterInfo characterInfo={characterInfo} />}
      </div>
    </main>
  );
}

export default App;
