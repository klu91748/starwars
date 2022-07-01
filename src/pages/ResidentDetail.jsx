import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getResidentDetail } from "../utils/getResidentDetail";

function ResidentDetail() {
  const resident = useLocation().state;
  const [homeWorld, setHomeWorld] = useState("n/a");
  const [films, setFilms] = useState("n/a");
  const [species, setSpecies] = useState("n/a");
  const [vehicles, setVehicles] = useState("n/a");
  const [starships, setStarShips] = useState("n/a");

  useEffect(() => {
    async function getData() {
      let home = await getResidentDetail(resident.homeworld.split());
      let filmList = await getResidentDetail(resident.films);
      let speciesList = await getResidentDetail(resident.species);
      let vehicleList = await getResidentDetail(resident.vehicles);
      let starshipList = await getResidentDetail(resident.starships);

      setHomeWorld(home);
      setFilms(filmList);
      setSpecies(speciesList);
      setVehicles(vehicleList);
      setStarShips(starshipList);
    }

    getData();
  }, []);

  function displayResults() {
    return (
      <div>
        <div>Name: {resident.name}</div>
        <div>{resident.height !== "n/a" && `Height: ${resident.height}`}</div>
        <div>{resident.mass !== "n/a" && `Mass: ${resident.mass}`}</div>
        <div>
          {resident.hair_color !== "n/a" &&
            `Hair color: ${resident.hair_color}`}
        </div>
        <div>
          {resident.skin_color !== "n/a" &&
            `Skin color: ${resident.skin_color}`}
        </div>
        <div>
          {resident.eye_color !== "n/a" && `Eye color: ${resident.eye_color}`}
        </div>
        <div>
          {resident.birth_year !== "unknown" &&
            `Birth year: ${resident.birth_year}`}
        </div>
        <div>{resident.gender !== "n/a" && `Gender: ${resident.gender}`}</div>
        <div>{homeWorld !== "n/a" && `Home world: ${homeWorld}`}</div>
        <div>{films !== "n/a" && `Films: ${films}`}</div>
        <div>{species !== "n/a" && `Species: ${species}`}</div>
        <div>{vehicles !== "n/a" && `Vehicles: ${vehicles}`}</div>
        <div>{starships !== "n/a" && `Starships: ${starships}`}</div>
      </div>
    );
  }

  return <div>{displayResults()}</div>;
}

export default ResidentDetail;
