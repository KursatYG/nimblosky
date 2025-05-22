import { useEffect, useState } from "react";
import type { CurrentWeatherData } from "../types/weatherTypes";
import { fetchCities, fetchCurrentWeather } from "../services/weatherAPI";

export const useCurrentWeather = (city: string) => {
  const [currentData, setCurrentData] = useState<CurrentWeatherData | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getWeather = async (city: string) => {
      try {
        const geo = await fetchCities(city)
        const current = await fetchCurrentWeather(geo[0].lat, geo[0].lon);
        setCurrentData(current);
        
        
        setError(null);
      } catch (err) {
        setError((err as Error).message || "Bir hata oluştu.");
      }
    };
    getWeather(city);
  }, [city]);

  return { currentData,error}
};
