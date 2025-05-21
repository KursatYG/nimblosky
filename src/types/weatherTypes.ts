export interface WeatherDescription {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface CurrentWeatherData {
  weather: WeatherDescription[];
  main: {
    pressure: number
    temp: number;
    feels_like: number;
    humidity: number;
    temp_min?: number;
    temp_max?: number;
  };
  wind: {
    speed: number;
    deg?: number;
  };
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  dt: number;
  visibility:number
}

interface ForecastCity {
  id: number;
  name: string;
}

export interface ForecastWeather {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
  wind:{
    deg:number,
    speed:number
  }
  weather: {
    main: string;
    description: string;
    icon: string;
  }[];
}

export interface ForecastResponse {
  list: ForecastWeather[];
  city: ForecastCity;
}

export interface AirQualityResponse {
  coord: [number, number];
  list: AirQualityData[];
}

export interface AirQualityData {
  dt: number;
  main: {
    aqi: number;
  };
  components: {
    co: number;
    no: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    nh3: number;
  };
}
