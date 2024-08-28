import * as React from "react";
import { Accordion as MaterialUIAccordion } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface AccordionProps {
  title: string;
  description: string;
}

export default function Accordion({ title, description }: AccordionProps) {
  return (
    <div>
      <MaterialUIAccordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls={title}
          id={title}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{description}</Typography>
        </AccordionDetails>
      </MaterialUIAccordion>
    </div>
  );
}
