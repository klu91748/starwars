import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getResidentList } from "../utils/getResidentList";
import { Link } from "react-router-dom";
import usePlanetInfo from "../customHooks/usePlanetInfo";

function Residents() {
  const [residentList, setResidentList] = useState([]);
  const planet = useLocation().pathname.substring(1);
  const APIs = usePlanetInfo(planet);

  useEffect(() => {
    async function getResidents() {
      if (APIs) {
        let list = await getResidentList(APIs.residents);
        setResidentList(list);
      }
    }
    getResidents();
  }, [APIs]);

  function displayResults() {
    return residentList.map((item, index) => {
      let path = `${item.name.toLocaleLowerCase().split(" ").join("")}`;
      return (
        <div key={index}>
          <Link
            to={{
              pathname: path,
            }}
            state={item}
          >
            {item.name}
          </Link>
        </div>
      );
    });
  }
  return <div>{displayResults()}</div>;
}

export default Residents;
