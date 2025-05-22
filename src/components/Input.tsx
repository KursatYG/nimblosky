import { useEffect, useState } from "react";
import type { GeoCity } from "../types/citiensTypes";
import { useWeather } from "../hooks/useWeather";
import { fetchCities } from "../services/weatherAPI";

interface Props {
  setSearch: (value: boolean) => void;
}

export const Input = ({ setSearch }: Props) => {
  const { setCity } = useWeather();
  const [input, setInput] = useState<string>("");
  const [results, setResults] = useState<GeoCity[]>([]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (input.length > 2) {
        fetchCities(input)
          .then(setResults)
          .catch(() => setResults([]));
      } else {
        setResults([]);
      }
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [input]);

  const handleSelect = (city: GeoCity) => {
    setCity(city.name);
    setInput("");
    setResults([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Şehir girin"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={`h-12 pl-4 pr-10 outline-0 w-full textColor bg-[#6FAAF3] dark:bg-[#2C4958] ${
          results.length > 0 ? "rounded-t-xl rounded-b-none" : "rounded-xl"
        }`}
      />
      {results.length > 0 && (
        <ul className="absolute z-10 w-full bg-[#6FAAF3] dark:bg-[#2C4958] border-t border-white/10 sm:rounded-b-2xl overflow-hidden sm:drop-shadow-md">
          {results.map((city, index) => (
            <li
              key={index}
              onClick={() => {
                handleSelect(city);
                setSearch(false);
              }}
              className="py-2 px-4 hover:bg-white/20 transition-all duration-100 border-b border-white/10"
            >
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
