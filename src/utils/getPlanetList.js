import axios from "axios";
import ServiceUtils from "./Service";

export async function getPlanetList() {
  let response = await axios.get(ServiceUtils.planets);
  let count = response.data.count;

  let planetList = [];

  for (let i = 1; i <= count; i++) {
    let planet = await axios.get(ServiceUtils.planets + i);
    planetList.push(planet.data);
  }
  return planetList;
}
