import React, { createContext, useEffect, useState } from "react";
import { IConfigFile } from "../../@types";
import { defaultConfig } from "../../utils";
import * as XLSX from "xlsx";

const fs = window.require("fs");

interface ConfigContextType {
  config: IConfigFile;
  setConfig: (config: any) => void;
}

export const ConfigContext = createContext<ConfigContextType>({
  config: defaultConfig,
  setConfig: () => {},
});

const ConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [config, setConfig] = useState<IConfigFile>(defaultConfig);

  const blobToBase64 = (blob: Blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const createAndSaveXLSX = async () => {
    const generalSettingsSheet = XLSX.utils.json_to_sheet([
      config?.generalSettings,
    ]);
    const routeSettingsSheet = XLSX.utils.json_to_sheet([
      config?.routeSettings,
    ]);
    const vehicleSettingsSheet = XLSX.utils.json_to_sheet([
      config?.vehicleSettings,
    ]);
    const workbook = XLSX.utils.book_new();
    const routes = XLSX.utils.aoa_to_sheet([
      [
        JSON.stringify(config?.routeSettings.points),
        config?.routeSettings.points.length,
      ],
    ]);
    const zones = XLSX.utils.aoa_to_sheet([
      [
        JSON.stringify(config?.routeSettings.zones),
        config?.routeSettings.zones.length,
      ],
    ]);

    XLSX.utils.book_append_sheet(
      workbook,
      generalSettingsSheet,
      "General Settings"
    );
    XLSX.utils.book_append_sheet(
      workbook,
      routeSettingsSheet,
      "Route Settings"
    );
    XLSX.utils.book_append_sheet(
      workbook,
      vehicleSettingsSheet,
      "Vehicle Settings"
    );
    XLSX.utils.book_append_sheet(workbook, routes, "Points");
    XLSX.utils.book_append_sheet(workbook, zones, "Zones");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });

    const base64Data = (await blobToBase64(blob)) as string;
    fs.writeFileSync("./configFile.xlsx", base64Data.split(",")[1], "base64");
  };

  useEffect(() => {
    const fs = window.require("fs");

    fs.writeFile("./configFile.txt", JSON.stringify(config), (err: any) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });

    createAndSaveXLSX();
  }, [config]);

  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;
