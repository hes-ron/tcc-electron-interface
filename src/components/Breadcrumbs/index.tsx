import React from "react";
import { Breadcrumbs as BC } from "@mui/joy";
import { Link } from "@mui/joy";

import * as S from "./styles";

interface BreadCrumbsProps {
  breadCrumbs: {
    label: string;
    disabled?: boolean;
    onClick?: () => void;
  }[];
}

const BreadCrumbs = ({ breadCrumbs }: BreadCrumbsProps) => {
  console.log("BreadCrumbs");

  return (
    <S.Header>
      <BC>
        {breadCrumbs.map((breadCrumb, index) => (
          <Link
            key={index}
            component="button"
            color="neutral"
            disabled={breadCrumb.disabled}
            onClick={breadCrumb.onClick}
          >
            {breadCrumb.label}
          </Link>
        ))}
      </BC>
    </S.Header>
  );
};

export default BreadCrumbs;
