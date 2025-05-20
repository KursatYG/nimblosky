import { createContext, useState, type ReactNode } from "react";

export interface WeatherContextType {
  city: string;
  setCity: (city: string) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [city, setCity] = useState("Istanbul");

  const updateCity = (newCity: string) => {
    if (newCity !== city) {
      setCity(newCity);
    }
  };

  return (
    <WeatherContext.Provider value={{ city, setCity:updateCity }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
