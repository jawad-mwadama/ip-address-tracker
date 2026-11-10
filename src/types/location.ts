export type LocationData = {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    timezone: string;
    lat: number;
    lng: number;
  };
  isp: string;
};
