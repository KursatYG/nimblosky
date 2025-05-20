import { Icon } from "@iconify/react/dist/iconify.js";
import { useWeather } from "../hooks/useWeather";
import { useAirPollution } from "../hooks/useAirPollution";
import { useCurrentWeather } from "../hooks/useCurrentWeather";
import { formatUnixTime } from "../utils/formatTime";

const Highlights = () => {
  const { city } = useWeather();
  const { airPollution, error } = useAirPollution(city);
  const { currentData } = useCurrentWeather(city);
  const components = airPollution?.list[0].components;
  const visibilityInKm = Number(currentData?.visibility) / 1000;

  if (error) return <p>Hata: {error}</p>;
  if (!airPollution) return null;

  return (
    <div className="card flex flex-col gap-5">
      <h2 className="title">Bugünün İstatistikleri</h2>
      <div className="grid gap-5 xl:grid-cols-2 grid-cols-1">
        <div className="card-sm">
          <p className="label-2 mb-5 max-xs:text-center">Hava Kalitesi</p>
          <div className="flex justify-between gap-4 items-center max-xs:flex-col ">
            <Icon icon="mdi:air-filter" width={36} height={36} />
            <ul className="flex flex-wrap grow justify-between gap-2 ">
              <li className="flex flex-col items-center gap-2">
                <p className="label-3">
                  PM<sub>2.5</sub>
                </p>
                <p className="text-xl sm:text-2xl xl:text-4xl font-medium">{components?.pm2_5.toFixed(1)}</p>
              </li>
              <li className="flex flex-col items-center gap-2">
                <p className="label-3">
                  SO<sub>2</sub>
                </p>
                <p className="text-xl sm:text-2xl xl:text-4xl font-medium">{components?.so2.toFixed(1)}</p>
              </li>
              <li className="flex flex-col items-center gap-2">
                <p className="label-3">
                  NO<sub>2</sub>
                </p>
                <p className="text-xl sm:text-2xl xl:text-4xl font-medium">{components?.no2.toFixed(1)}</p>
              </li>
              <li className="flex flex-col items-center gap-2">
                <p className="label-3">
                  O<sub>3</sub>
                </p>
                <p className="text-xl sm:text-2xl xl:text-4xl font-medium">{components?.o3.toFixed(1)}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="card-sm">
          <p className="label-2 mb-5 max-xs:text-center">Gün Doğumu & Gün Batımı</p>
          <div className="flex flex-wrap grow justify-between gap-2 max-xs:justify-center">
            <div className="flex gap-2 items-center">
              <Icon icon="solar:sun-bold-duotone" width={36} height={36} />
              <div className="">
                <p className="label-3">Gün Doğumu</p>
                <p className="text-xl sm:text-2xl xl:text-4xl font-medium">
                  {formatUnixTime(Number(currentData?.sys.sunrise))}
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Icon icon="solar:moon-bold" width={36} height={36} />
              <div className="">
                <p className="label-3">Gün Doğumu</p>
                <p className="text-xl sm:text-2xl xl:text-4xl font-medium">
                  {formatUnixTime(Number(currentData?.sys.sunset))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4">
        <div className="card-sm">
          <p className="label-2 mb-5">Nem</p>
          <div className="flex justify-between">
            <Icon
              icon="material-symbols:humidity-percentage-rounded"
              width={36}
              height={36}
            />
            <p className="text-xl sm:text-2xl xl:text-4xl font-medium"> {currentData?.main.humidity}%</p>
          </div>
        </div>
        <div className="card-sm">
          <p className="label-2 mb-5">Basınç</p>
          <div className="flex justify-between">
            <Icon icon="mdi:barometer" width={36} height={36} />
            <p className="text-xl sm:text-2xl xl:text-4xl font-medium">
              {" "}
              {currentData?.main.pressure}
              <sub>hPa</sub>
            </p>
          </div>
        </div>
        <div className="card-sm">
          <p className="label-2 mb-5">Görüş Mesafesi</p>
          <div className="flex justify-between">
            <Icon icon="mdi:eye" width={36} height={36} />
            <p className="text-xl sm:text-2xl xl:text-4xl font-medium">
              {" "}
              {visibilityInKm}
              <sub>km</sub>
            </p>
          </div>
        </div>
        <div className="card-sm">
          <p className="label-2 mb-5">Hissedilen Sıcaklık</p>
          <div className="flex justify-between">
            <Icon icon="fluent:temperature-24-filled" width={36} height={36} />
            <p className="text-xl sm:text-2xl xl:text-4xl font-medium"> {currentData?.main.feels_like}°</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
