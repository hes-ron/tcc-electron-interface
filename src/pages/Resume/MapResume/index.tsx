import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { ConfigContext } from "../../../contexts/config";

const center = {
  lat: -3.745,
  lng: -38.523,
};

interface MapProps {
  containerStyle: React.CSSProperties;
}

const MapResume = ({ containerStyle }: MapProps) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBLT06LgB4p4qFuxOsZGyMjhGgkcU7kCFI",
  });

  const [map, setMap] = React.useState(null);

  const { config } = React.useContext(ConfigContext);

  const onLoad = React.useCallback(function callback(map: google.maps.Map) {
    const bounds = new window.google.maps.LatLngBounds(
      config.routeSettings.points[0]
    );
    map.fitBounds(bounds, 100);

    setMap(map);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={300}
      onLoad={onLoad}
      options={{
        disableDefaultUI: true,
      }}
    >
      {config?.routeSettings?.points.map((marker, index) => (
        <Marker
          key={index}
          options={{
            animation: google.maps.Animation.DROP,
            label: {
              text: (index + 1).toString(),
              color: "white",
            },
          }}
          position={{ lat: marker.lat, lng: marker.lng }}
          onClick={() => {
            console.log(marker);
          }}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapResume;
