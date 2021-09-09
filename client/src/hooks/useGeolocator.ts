import { useState } from "react";

const useGeolocator = () => {
  const [position, setPosition] = useState<GeolocationPosition>();
  const [geoLocatorError, setGeoLocatorError] =
    useState<GeolocationPositionError>();

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setPosition(position);
    },
    (error) => {
      setGeoLocatorError(error);
    }
  );

  return { position, geoLocatorError };
};

export default useGeolocator;
