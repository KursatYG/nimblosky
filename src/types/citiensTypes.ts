export type GeoCity = {
  name: string;
  country: string;
  lat: number;
  lon: number;
};

export type OpenCageResult = {
  components: {
    city?: string;
    town?: string;
    village?: string;
    country: string;
  };
  geometry: {
    lat: number;
    lng: number;
  };
  formatted: string;
};