import usePlanets from "../customHooks/usePlanets";
import { atom } from "recoil";

export const planetAtom = atom({
  key: "planetAtom",
  default: [],
});

function useInitialize() {
  usePlanets();
}

export default useInitialize;
