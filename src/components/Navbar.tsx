import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "./Button";
import { Input } from "./Input";
import { useTheme } from "../hooks/useTheme";
import { useState } from "react";
import { useWeather } from "../hooks/useWeather";

const Navbar = () => {
  const { setCity } = useWeather();
  const { darkMode, toggleDarkMode } = useTheme();
  const [search, setSearch] = useState<boolean>(false);

  const toggleSearch = () => {
    setSearch(!search);
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;

        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=tr`
        );
        const data = await response.json();

        if (data.city) {
          setCity(data.city);
        } else {
          alert("Şehir bilgisi alınamadı.");
        }       
      },
      
      (err) => {
        alert("Konum bilgisi alınamadı.");
        console.error(err);
      }
    );
  };

  return (
    <nav className="flex items-center justify-between">
      <div>
        <img
          src="nimblosky_logo.svg"
          alt="logo"
          width={100}
          height={100}
          loading="lazy"
        />
      </div>
      <div className="sm:max-w-96 w-full textColor relative hidden md:block  ">
        <Icon
          icon="material-symbols:search-rounded"
          width={24}
          height={24}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden md:block"
        />

        <Input setSearch={setSearch} />
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <Button
          icon="material-symbols:search-rounded"
          className="md:hidden"
          onClick={toggleSearch}
        />
        <div>
          <Button
            onClick={toggleDarkMode}
            icon={darkMode ? "si:sun-fill" : "solar:moon-bold"}
          />
        </div>
        <Button onClick={handleLocation} title="Konumum" icon="mdi:location" />
      </div>
      {search && (
        <div className="fixed inset-0 z-50 bg-[#6FAAF3] dark:bg-[#2C4958] md:hidden">
          <div className="pt-2 relative border-b border-white/10">
            <Input setSearch={setSearch} />
            <button
              className="absolute right-4 top-4 z-50"
              onClick={toggleSearch}
            >
              <Icon
                icon="material-symbols:close-rounded"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
