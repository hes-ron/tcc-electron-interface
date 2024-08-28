import { createRoot } from "react-dom/client";
import ConfigProvider from "./contexts/config";
import Routes from "./routes";
import SidebarProvider from "./contexts/sidebar";
const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <ConfigProvider>
    <SidebarProvider>
      <Routes />
    </SidebarProvider>
  </ConfigProvider>
);
