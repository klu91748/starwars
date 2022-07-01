import { useRecoilValue } from "recoil";
import { planetAtom } from "../globalState/useGlobalState";

function usePlanetInfo(props) {
  const planets = useRecoilValue(planetAtom);
  const planet = [];

  function getPlanet() {
    for (let i = 0; i < planets.length; i++) {
      planet[planets[i].name.toLocaleLowerCase().split(" ").join("")] =
        planets[i];
    }
  }

  getPlanet();

  return planet[props];
}

export default usePlanetInfo;
