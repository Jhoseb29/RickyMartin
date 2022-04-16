import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationInfo from "./LocationInfo.js";

const LocationContainer = (url) => {
  const [Location, setLocation] = useState({});
  useEffect(() => {
    const promise = axios(url);
    promise.then((res) => {
      setLocation({
        name: res.data.name,
        type: res.data.type,
        dimension: res.data.dimension,
        population: res.data.residents.length
      });
    });
  }, [url]);

  return (
    <LocationInfo
      name={Location.name}
      type={Location.type}
      dimension={Location.dimension}
      population={Location.population}
    />
  );
};

export default LocationContainer;