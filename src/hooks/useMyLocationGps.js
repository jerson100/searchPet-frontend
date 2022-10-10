import { useEffect, useState } from "react";

const useMyLocationGps = () => {
  const [location, setlocation] = useState(null);
  useEffect(() => {
    const id = navigator?.geolocation.watchPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        setlocation({
          lat,
          lng,
        });
      },
      (e) => {
        console.log(e);
      },
      {
        enableHighAccuracy: true,
      }
    );
    return () => {
      navigator.geolocation.clearWatch(id);
    };
  }, [setlocation]);
  return { location };
};

export default useMyLocationGps;
