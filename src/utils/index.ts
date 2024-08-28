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
    tripStartTime: 4.0,
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
