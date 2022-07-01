import { useEffect, useState } from "react";
import { getPlanetList } from "../utils/getPlanetList";
import { useRecoilState } from "recoil";
import { planetAtom } from "../globalState/useGlobalState";

function usePlanets() {
  const [planets, setPlanets] = useRecoilState(planetAtom);

  useEffect(() => {
    async function getPlanets() {
      let planetList = await getPlanetList();
      setPlanets(planetList);
    }
    getPlanets();
  }, []);

  return planets;
}

export default usePlanets;
