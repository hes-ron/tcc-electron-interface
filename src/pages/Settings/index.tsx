import React from "react";
import DefaultPage from "../DefaultPage";
import BreadCrumbs from "../../components/Breadcrumbs";

const Settings = () => {
  const breadCrumbs = [{ label: "Configurações", disabled: true }];

  return (
    <DefaultPage>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
    </DefaultPage>
  );
};

export default Settings;
