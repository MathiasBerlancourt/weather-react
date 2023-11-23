import React from "react";

const WeatherContent = ({ locations, isLoading }) => {
  console.log("locaition", locations);

  if (!locations || isLoading) {
    return <div>pas de lieux</div>;
  }

  return locations.map((location) => <div>{location.name}</div>);
};

export default WeatherContent;
