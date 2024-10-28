import React, { useEffect } from "react";
import {
  Circle,
  GoogleMap,
  Marker,
  useJsApiLoader,
  InfoBox,
} from "@react-google-maps/api";
import { IRouteSettings } from "../../@types";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const center = {
  lat: -27.113856094534604,
  lng: -52.70659042245442,
};

interface MarkerProps {
  lat: number;
  lng: number;
  unload?: number;
  start?: number;
  end?: number;
  manual?: number;
  danger?: boolean;
}

interface ZonesProps {
  lat: number;
  lng: number;
  radius: number;
}

interface MapProps {
  containerStyle: React.CSSProperties;
  routeSettings: IRouteSettings;
  setRouteSettings: React.Dispatch<React.SetStateAction<IRouteSettings>>;
}

const Map = ({ containerStyle, routeSettings, setRouteSettings }: MapProps) => {
  const [markers, setMarkers] = React.useState<MarkerProps[]>([]);
  const [zones, setZones] = React.useState<ZonesProps[]>([]);
  const [addingPoint, setAddingPoint] = React.useState<boolean>(true);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBLT06LgB4p4qFuxOsZGyMjhGgkcU7kCFI",
  });

  const [map, setMap] = React.useState(null);

  useEffect(() => {
    setMarkers(routeSettings.points);
  }, [routeSettings.points]);

  useEffect(() => {
    setRouteSettings({
      ...routeSettings,
      points: markers,
    });
  }, [markers]);

  useEffect(() => {
    setRouteSettings({
      ...routeSettings,
      zones: zones,
    });
  }, [zones, setRouteSettings]);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  console.log("markers", markers);
  console.log("routeSettings", routeSettings.points);

  const handleAddMarker = (e: any) => {
    setMarkers((current: any) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        unload: 0,
        start: 0,
        end: 0,
        manual: 0,
      },
    ]);
  };

  const handleToggle = (value: string) => {
    if (value === "addPoint") {
      setAddingPoint(true);
    } else {
      setAddingPoint(false);
    }
  };

  const handleAddZone = React.useCallback((e: any) => {
    setZones((current: any) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        radius: 1000,
      },
    ]);
  }, []);

  const handleAddMarkerOrZone = (e: any) => {
    if (addingPoint) {
      handleAddMarker(e);
    } else {
      handleAddZone(e);
    }
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={9}
      // onLoad={onLoad}
      onClick={handleAddMarkerOrZone}
      onUnmount={onUnmount}
    >
      <ToggleButtonGroup
        value={addingPoint ? "addPoint" : "addZone"}
        exclusive
        onChange={(event, value) => handleToggle(value)}
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      >
        <ToggleButton
          sx={{
            backgroundColor: "#0B6BCB !important",
            color: "white !important",
            "&:hover": { backgroundColor: "#0B6BCB" },
          }}
          value="addPoint"
        >
          Adicionar ponto
        </ToggleButton>
        <ToggleButton
          sx={{
            backgroundColor: "#d32f2f !important",
            color: "white",
            "&:hover": { backgroundColor: "#d32f2f" },
          }}
          value="addZone"
        >
          Adicionar zona
        </ToggleButton>
      </ToggleButtonGroup>

      {routeSettings?.zones?.map((zone, index) => (
        <Circle
          key={index}
          center={{ lat: zone.lat, lng: zone.lng }}
          radius={zone.radius}
          // editable
          // onRadiusChanged={() => {
          //   console.log("Raio alterado", zone.radius);
          // }}
          options={{
            fillColor: "red",
            fillOpacity: 0.2,
            strokeColor: "red",
            strokeOpacity: 0.5,
            strokeWeight: 1,
          }}
        />
      ))}
      {routeSettings?.points.map((marker, index) => (
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

export default Map;
