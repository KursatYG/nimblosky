import { Icon } from "@iconify/react/dist/iconify.js";
import { weatherIconMap } from "../constants/weatherIconMap";
import { useForecast } from "../hooks/useForecast";
import { useWeather } from "../hooks/useWeather";
import { formatDate } from "../utils/formatDate";

const Forecast = () => {
  const { city } = useWeather();
  const { forecast, error } = useForecast(city);

  if (error) return <p>Hata: {error}</p>;
  if (!forecast) return null;

  const dailyForecasts = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div>
      <h2 className="title my-4">Sonraki 5 Gün</h2>
      <div className="card">
        <ul className="flex flex-col gap-4">
          {dailyForecasts.map((item, index) => {
            const iconName =
              weatherIconMap[item.weather[0].main] || "mdi:weather-cloudy";
            return (
              <li
                key={index}
                className="flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-1 text-xl">
                  <span className="font-bold">
                    {Math.round(item.main.temp)}°
                  </span>
                  <Icon icon={iconName} width={36} height={36} />
                  <p className="text-sm capitalize opacity-50 text-left">
                    {item.weather[0].description}{" "}
                  </p>
                </div>

                <p className="text-sm  text-right w-1/3 ">
                  {formatDate(item.dt)}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Forecast;
