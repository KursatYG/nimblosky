import { Icon } from "@iconify/react/dist/iconify.js";
import { formatDate } from "../utils/formatDate";
import { weatherIconMap } from "../constants/weatherIconMap";
import { useWeather } from "../hooks/useWeather";
import { useCurrentWeather } from "../hooks/useCurrentWeather";

const CurrentWeather = () => {
  const { city } = useWeather();

  const { currentData, error } = useCurrentWeather(city);

  if (!currentData) return;

  const iconName =
    weatherIconMap[currentData.weather[0].main] || "mdi:weather-cloudy";

  return (
    <div className="card">
      {error ? (
        <p className="text-center">{error}</p>
      ) : (
        <div className="flex flex-col gap-3">
          <h2 className="title">Bugün</h2>
          <div className="flex justify-between items-center sm:gap-3">
            <p className="text-8xl max-xs:text-7xl leading-24">
              {Math.round(currentData.main.temp)}°
            </p>

            <Icon icon={iconName} width={80} height={80} />
          </div>
          <p className="label border-b-2 border-white/30 pb-2">
            {currentData.weather[0].description}
          </p>
          <ul>
            <li className="flex items-center gap-3">
              <Icon icon="mdi:calendar" width={18} height={18} />
              <p className="label-2">{formatDate(currentData.dt)}</p>
            </li>
            <li className="flex items-center gap-3">
              <Icon icon="mdi:location" width={18} height={18} />
              <p className="label-2">
                {currentData.name}, {currentData.sys.country}{" "}
              </p>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
