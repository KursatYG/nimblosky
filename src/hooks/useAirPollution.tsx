import { useEffect, useState } from "react";
import type { AirQualityResponse } from "../types/weatherTypes";
import { fetchAirPollution, fetchCities } from "../services/weatherAPI";

export const useAirPollution = (city: string) => {
  const [airPollution, setAirPollution] = useState<AirQualityResponse | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city) return;
    const getAirPollution = async (city: string) => {
      setError(null);
      try {
        const geo = await fetchCities(city);
        const data = await fetchAirPollution(geo[0].lat, geo[0].lon);
        setAirPollution(data);
        
        
      } catch (err) {
        setError((err as Error).message);
      }
    };
    getAirPollution(city);
  }, [city]);
  return { airPollution, error };
};
