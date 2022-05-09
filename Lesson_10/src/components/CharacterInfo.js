function CharacterInfo({ characterInfo }) {
  return (
    <>
      <h1>{characterInfo.name}</h1>
      <p>
        Height: <span>{characterInfo.height}</span>
      </p>
      <p>
        Mass: <span>{characterInfo.mass}</span>
      </p>
      <p>
        Skin Color: <span>{characterInfo.skin_color}</span>
      </p>
      <p>
        Hair Color: <span>{characterInfo.hair_color}</span>
      </p>
      <p>
        Eye Color: <span>{characterInfo.eye_color}</span>
      </p>
      <p>
        Birth Year: <span>{characterInfo.birth_year}</span>
      </p>
      <p>
        Gender: <span>{characterInfo.gender}</span>
      </p>
    </>
  );
}

export default CharacterInfo;
