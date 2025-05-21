import { useEffect, useState } from "react";
import { fetchCities, fetchForecast } from "../services/weatherAPI";
import type { ForecastResponse } from "../types/weatherTypes";

export const useForecast = (city: string) => {
  const [forecast, setForecast] = useState<ForecastResponse | null>(null);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!city) return;

    const getForecast = async (city:string) => {
      setError(null);
      try {
        const geo = await fetchCities(city);
        const data = await fetchForecast(geo[0].lat, geo[0].lon);
        setForecast(data);
        console.log(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    getForecast(city);
  }, [city]);

  return { forecast, error };
};
