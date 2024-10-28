import { IConfigFile } from "../@types";

export const defaultConfig: IConfigFile = {
  generalSettings: {
    activateSignal: false,
    activeAvoid: false,
    prioritySignalAvoid: 0,
    rain: false,
    operators: {
      opVivo: true,
      opClaro: false,
      opTim: false,
      opOi: false,
    },
  },
  routeSettings: {
    tripStartTime: "00:29:50",
    toleranceArrival: 20,
    timeAvoidMax: 0,
    rayConsiderable: 10,
    timeWindowShow: false,
    timeWindow: false,
    points: [],
    zones: [],
  },
  vehicleSettings: {
    loadedCapacity: 100,
    vehicleType: "Rodotrem",
    payloadCapacity: 74000,
    maximumSpeed: 90,
    minimumSpeed: 15,
  },
  vehicles: [
    {
      vehicleType: "Automóvel",
      payloadCapacity: 0,
      maximumSpeed: 100,
      minimumSpeed: 15,
      loadedCapacity: 0,
    },
    {
      loadedCapacity: 0,
      vehicleType: "Rodotrem",
      payloadCapacity: 74000,
      maximumSpeed: 90,
      minimumSpeed: 15,
    },
    {
      loadedCapacity: 0,
      vehicleType: "Caminhão toco",
      payloadCapacity: 6000,
      maximumSpeed: 80,
      minimumSpeed: 15,
    },
    {
      loadedCapacity: 0,
      vehicleType: "Caminhão truck",
      payloadCapacity: 12000,
      maximumSpeed: 80,
      minimumSpeed: 15,
    },
    {
      loadedCapacity: 0,
      vehicleType: "Caminhão bitruck",
      payloadCapacity: 14000,
      maximumSpeed: 80,
      minimumSpeed: 15,
    },
    {
      loadedCapacity: 0,
      vehicleType: "Cavalo toco + carreta 2 eixos",
      payloadCapacity: 33000,
      maximumSpeed: 80,
      minimumSpeed: 15,
    },
    {
      loadedCapacity: 0,
      vehicleType: "Cavalo toco + carreta 3 eixos",
      payloadCapacity: 42000,
      maximumSpeed: 80,
      minimumSpeed: 15,
    },
    {
      loadedCapacity: 0,
      vehicleType: "Cavalo truck + carreta 3 eixos",
      payloadCapacity: 46000,
      maximumSpeed: 80,
      minimumSpeed: 15,
    },
    {
      loadedCapacity: 0,
      vehicleType: "Veículo Urbano de Carga (VUC)",
      payloadCapacity: 3000,
      maximumSpeed: 80,
      minimumSpeed: 15,
    },
  ],
};

interface RouteData {
  origin: google.maps.LatLng | google.maps.LatLngLiteral | google.maps.Place;
  destination:
    | google.maps.LatLng
    | google.maps.LatLngLiteral
    | google.maps.Place
    | string;
  waypoints: google.maps.DirectionsWaypoint[];
}

export function parseRoute(url: string) {
  // Extrai todas as coordenadas da URL
  const regex = /-?\d+\.\d+,-?\d+\.\d+/g;
  const matches = url.match(regex);

  if (matches && matches.length >= 2) {
    // Define a primeira coordenada como origem e a última como destino
    const [originLat, originLng] = matches[0].split(",").map(Number);
    const origin = new google.maps.LatLng(originLat, originLng);

    const [destinationLat, destinationLng] = matches[matches.length - 1]
      .split(",")
      .map(Number);
    const destination = new google.maps.LatLng(destinationLat, destinationLng);

    // Define as coordenadas intermediárias como waypoints
    const waypoints = matches.slice(1, -1).map((coordinate) => {
      const [lat, lng] = coordinate.split(",").map(Number);
      return {
        location: new google.maps.LatLng(lat, lng),
        stopover: true,
      };
    });

    return { origin, destination, waypoints };
  } else {
    throw new Error("URL inválida ou faltando coordenadas");
  }
}
