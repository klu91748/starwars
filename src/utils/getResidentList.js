import axios from "axios";

export async function getResidentList(props) {
  let residentList = [];

  for (let i = 0; i < props.length; i++) {
    let resident = await axios.get(props[i]);
    residentList.push(resident.data);
  }

  return residentList;
}
