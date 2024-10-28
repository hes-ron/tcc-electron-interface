import dayjs, { Dayjs } from "dayjs";

export interface ISettingConfig {
  config: IConfigFile;
  setConfig: React.Dispatch<React.SetStateAction<IConfigFile>>;
}

export interface IOperators {
  opVivo: boolean;
  opClaro: boolean;
  opTim: boolean;
  opOi: boolean;
}

export interface IGeneralSettings {
  rain: boolean;
  operators: IOperators;
  activateSignal: boolean;
  activeAvoid: boolean;
  prioritySignalAvoid: number;
}

export interface IRouteSettings {
  tripStartTime: string;
  toleranceArrival: number;
  timeAvoidMax: number;
  rayConsiderable: number;
  timeWindowShow: boolean;
  timeWindow: boolean;
  points: IPoints[];
  zones: IZones[];
}

export interface IPoints {
  lat: number;
  lng: number;
  unload?: number;
  start?: number;
  end?: number;
  manual?: number;
  danger?: boolean;
}

export interface IZones {
  lat: number;
  lng: number;
  radius: number;
}

export interface IVehicleSettings {
  loadedCapacity: number;
  vehicleType: string;
  payloadCapacity: number;
  maximumSpeed: number;
  minimumSpeed: number;
}

export interface ISimulationValues {
  arrayVisited: number[];
  routePonts: number[];
  routePontsAlternative: number[];
  routePontsWindows: number[];
  relationPonts: number[];
  sizeRoutes: number[];
}

export interface IInterfaceSettings {
  darkMode: boolean;
}

export interface IConfigFile {
  generalSettings: IGeneralSettings;
  routeSettings: IRouteSettings;
  vehicleSettings: IVehicleSettings;
  simulationValues?: ISimulationValues;
  interfaceSettings?: IInterfaceSettings;
  vehicles?: IVehicles[];
}

export interface IVehicles {
  vehicleType: string;
  loadedCapacity: number;
  payloadCapacity: number;
  maximumSpeed: number;
  minimumSpeed: number;
}
