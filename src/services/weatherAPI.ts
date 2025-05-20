import type { GeoCity } from "../types/citiensTypes";
import type {
  AirQualityResponse,
  ForecastResponse,
} from "../types/weatherTypes";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const commonParams = `&appid=${API_KEY}&units=metric&lang=tr`;

export async function fetchCities(query: string): Promise<GeoCity[]> {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Şehir verisi alınamadı.");
  return await res.json();
}

export async function fetchCurrentWeather(city: string) {
  const url = `${BASE_URL}/weather?q=${encodeURIComponent(
    city
  )}${commonParams}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Hava durumu verisi alınamadı.");
  return await res.json();
}

export async function fetchForecast(
  lat: number,
  lon: number
): Promise<ForecastResponse> {
  const url = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}${commonParams}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Tahmin verisi alınamadı.");
  return await res.json();
}

export async function fetchAirPollution(
  lat: number,
  lon: number
): Promise<AirQualityResponse> {
  const url = `${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}${commonParams}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Hava kalitesi verisi alınamadı.");
  return await res.json();
}
