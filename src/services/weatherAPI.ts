import type { GeoCity} from "../types/citiensTypes";
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

// export async function fetchCities(query: string): Promise<GeoCity[]> {
//   const API_KEY = import.meta.env.VITE_OPENCAGE_API_KEY;
//   const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
//     query
//   )}&key=${API_KEY}&limit=5&language=tr`;

//   const res = await fetch(url);
//   if (!res.ok) throw new Error("Şehir verisi alınamadı.");

//   const data = await res.json();

//   return data.results.map((item: OpenCageResult) => ({
//     name: item.components.city || item.components.town || item.components.village || item.formatted,
//     country: item.components.country,
//     lat: item.geometry.lat,
//     lon: item.geometry.lng,
//   }));
// }

export async function fetchCurrentWeather(lat:number,lon:number) {
  const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}${commonParams}`;
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
