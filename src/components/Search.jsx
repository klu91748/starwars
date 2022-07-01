import { useState } from "react";
import { Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { planetAtom } from "../globalState/useGlobalState";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState("");
  const planets = useRecoilValue(planetAtom);

  const searchPlanets = (searchValue) => {
    setSearchInput(searchValue);

    if (searchInput !== "") {
      const filteredData = planets.filter((planet) => {
        return Object.values(planet)
          .join("")
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase());
      });
      setFilteredData(filteredData);
    } else {
      setFilteredData(planets);
    }
  };

  function displayResults() {
    if (searchInput.length > 0) {
      return filteredData.map((planet, index) => {
        let path = `${planet.name.toLocaleLowerCase().split(" ").join("")}`;
        return (
          <div key={index}>
            <Link
              to={{
                pathname: path,
              }}
            >
              {planet.name}
            </Link>
          </div>
        );
      });
    } else {
      return planets.map((planet, index) => {
        let path = `${planet.name.toLocaleLowerCase().split(" ").join("")}`;
        return (
          <div key={index}>
            <Link
              to={{
                pathname: path,
              }}
            >
              {planet.name}
            </Link>
          </div>
        );
      });
    }
  }

  return (
    <div>
      <div style={{ padding: 20 }}>
        <Input
          placeholder="Search..."
          onChange={(e) => searchPlanets(e.target.value)}
        />
        <div>{displayResults()}</div>
      </div>
    </div>
  );
}

export default Search;
