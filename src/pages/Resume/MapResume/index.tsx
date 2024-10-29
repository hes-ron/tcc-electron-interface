import React from "react";
import {
  Circle,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { ConfigContext } from "../../../contexts/config";

const center = {
  lat: -27.113856094534604,
  lng: -52.70659042245442,
};

interface MapProps {
  containerStyle: React.CSSProperties;
}

const MapResume = ({ containerStyle }: MapProps) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBLT06LgB4p4qFuxOsZGyMjhGgkcU7kCFI",
    language: "ptBr",
  });

  const [map, setMap] = React.useState(null);

  const { config } = React.useContext(ConfigContext);

  // const onLoad = React.useCallback(function callback(map: google.maps.Map) {
  //   const bounds = new window.google.maps.LatLngBounds(
  //     config.routeSettings.points[0]
  //   );
  //   map.fitBounds(bounds, 100);

  //   setMap(map);
  // }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={9}
      // onLoad={onLoad}
      options={{
        streetViewControl: false,
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

      {config?.routeSettings?.zones?.map((zone, index) => (
        <Circle
          key={index}
          center={{ lat: zone.lat, lng: zone.lng }}
          radius={zone.radius}
          options={{
            fillColor: "red",
            fillOpacity: 0.2,
            strokeColor: "red",
            strokeOpacity: 0.5,
            strokeWeight: 1,
          }}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapResume;
