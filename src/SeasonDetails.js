import "./SeasonDetails.css"; // Notice : no variable here. maybe because of css//

import React from "react";
const seasonConfig = {
  summer: {
    text: "Lets hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Bruuu, its too cold",
    iconName: "snowflake",
  },
};

const getSeason = (lati, month) => {
  if (month > 2 && month < 9) {
    return lati > 0 ? "summer" : "winter";
  } else return lati > 0 ? "winter" : "summer";
};
const SeasonDetails = (props) => {
  console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-details ${season}`}>
      <i className={`massive icon-left ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`massive icon-right ${iconName} icon`} />
    </div>
  );
};
export default SeasonDetails;
