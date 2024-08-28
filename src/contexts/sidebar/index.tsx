import React, { createContext } from "react";

interface SidebarContextType {
  sideBarOpen: boolean;
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

export const SidebarContext = createContext<SidebarContextType>({
  sideBarOpen: true,
  setSideBarOpen: () => {},
  page: "/",
  setPage: () => {},
});

const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sideBarOpen, setSideBarOpen] = React.useState(true);
  const [page, setPage] = React.useState("/");

  return (
    <SidebarContext.Provider
      value={{ sideBarOpen, setSideBarOpen, page, setPage }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
