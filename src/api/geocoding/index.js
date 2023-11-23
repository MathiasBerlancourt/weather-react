import { useEffect, useState } from "react";
import axios from "axios";

const useGeoCoding = (searchTerm) => {
  const [locations, setLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm}&count=10&language=fr&format=json`;

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(url);
        setLocations(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchLocation();
  }, [searchTerm]);

  return {
    locations,
    isLoading,
  };
};

export default useGeoCoding;
