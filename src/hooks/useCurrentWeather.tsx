import { useEffect, useState } from "react";
import type { CurrentWeatherData } from "../types/weatherTypes";
import { fetchCurrentWeather } from "../services/weatherAPI";

export const useCurrentWeather = (city: string) => {
  const [currentData, setCurrentData] = useState<CurrentWeatherData | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getWeather = async (city: string) => {
      try {
        const current = await fetchCurrentWeather(city);
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
