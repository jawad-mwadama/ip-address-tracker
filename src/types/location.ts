export type LocationData = {
  ip: string;
  isp: string;
  location: {
    country: string;
    region: string;
    city: string;
    timezone: string;
    lat: number;
    lng: number;
  };
};
