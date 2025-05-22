import { Icon } from "@iconify/react/dist/iconify.js";
import { weatherIconMap } from "../constants/weatherIconMap";
import { useForecast } from "../hooks/useForecast";
import { useWeather } from "../hooks/useWeather";

const Hours = () => {
  const { city } = useWeather();
  const { forecast,error } = useForecast(city);


  const slicedList = forecast?.list.slice(0, 8);

    if (error) return <p>Hata: {error}</p>;
  if (!forecast) return null;

  return (
    <div className="mt-4 pb-5">
      <h2 className="title mb-3">Sonraki Saatler</h2>
      <div className="overflow-x-auto flex flex-col gap-4">
        <ul className="flex gap-3 justify-between px-2 ">
          {slicedList?.map((item, index) => {
            const hour = new Date(item.dt * 1000).toLocaleTimeString("tr-TR", {
              hour: "numeric",
              hour12: false,
            });
            const iconName =
              weatherIconMap[item.weather[0].main] || "mdi:weather-cloudy";

            return (
              <li
                key={index}
                className="flex flex-col items-center gap-2 justify-between "
              >
                <div className="card-sm  flex flex-col items-center gap-2 w-26">
                  <p className="label-2 font-bold">{hour}</p>
                  <Icon icon={iconName} height={48} width={48} />
                  <p className="label-2">{Math.round(item.main.temp)}°</p>
                </div>
                <div className="card-sm  flex flex-col items-center gap-2 w-26">
                  <p className="label-2">Rüzgar</p>
                  <Icon
                    icon="fluent-mdl2:wind-direction"
                    height={36}
                    width={36}
                    className={`text-blue-950`}
                    style={{ rotate: `${item.wind.deg}deg` }}
                  />
                  <p className="label-2 flex flex-col item-center justify-center text-center">
                    {Math.round(item.wind.speed * 3.6)}{" "}
                    <span className="label-3 font-normal">km/sa</span>{" "}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Hours;
