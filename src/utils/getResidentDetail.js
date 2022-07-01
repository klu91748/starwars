import axios from "axios";

export async function getResidentDetail(props) {
  let residentInfo = [];

  for (let i = 0; i < props.length; i++) {
    let info = await axios.get(props[i]);
    if (info.data.name) {
      residentInfo.push(info.data.name);
    } else if (info.data.title) {
      residentInfo.push(info.data.title);
    }
  }

  return parser(residentInfo);
}

function parser(info) {
  if (info.length === 0) {
    return "n/a";
  }
  let result = "";
  for (let i = 0; i < info.length; i++) {
    result += info[i] + ", ";
  }

  return result.slice(0, -2);
}
