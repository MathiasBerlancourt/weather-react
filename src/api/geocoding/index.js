// custom hook qui va récupérer un objet contenant les informations des villes

import { useEffect, useState } from "react";
import axios from "axios";

const useGeoCoding = (searchTerm) => {
  const [locations, setLocations] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm}&count=10&language=fr&format=json`;

  const fetchLocation = async () => {
    useEffect(() => {
      try {
        const result = axios.get(`${url}`);
        setLocations(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
      fetchLocation();
    }, [searchTerm]);
  };

  return {
    locations,
    isLoading,
  };
};
export default useGeoCoding;
