import React, { useState, useEffect } from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import { parseRoute } from "../../../utils";

const MapWithRoute = ({ linkUrl }: { linkUrl: string }) => {
  const [directionsResponse, setDirectionsResponse] = useState(null);

  function removerCaracteresEspeciais(string: string) {
    return string.replace(/\+/g, "");
  }

  useEffect(() => {
    const fetchDirections = async () => {
      const { origin, destination, waypoints } = parseRoute(
        removerCaracteresEspeciais(linkUrl)
      );

      console.log(origin, destination, waypoints);
      const directionsService = new google.maps.DirectionsService();
      const results = await directionsService.route({
        origin,
        destination,
        waypoints,
        travelMode: google.maps.TravelMode.DRIVING,
      });
      setDirectionsResponse(results);
    };

    if (linkUrl) {
      fetchDirections();
    }
  }, [linkUrl]);

  return (
    <div style={{ marginBottom: "16px" }}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "500px" }}
        center={origin}
        zoom={10}
      >
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </div>
  );
};

export default MapWithRoute;
