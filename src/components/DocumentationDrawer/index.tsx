import * as React from "react";

import Drawer from "@mui/joy/Drawer";

import Sheet from "@mui/joy/Sheet";
import { documentationTexts } from "../../utils/documentationTexts";
import Accordion from "../Accordion";
import { Button } from "@mui/material";

interface DocumentationDrawerProps {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DocumentationDrawer({
  drawerOpen,
  setDrawerOpen,
}: DocumentationDrawerProps) {
  return (
    <React.Fragment>
      <Drawer
        size="md"
        variant="plain"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{
          content: {
            sx: {
              bgcolor: "transparent",
              p: { md: 3, sm: 0 },
              boxShadow: "none",
            },
          },
        }}
      >
        <Sheet
          sx={{
            borderRadius: "md",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <Button onClick={() => setDrawerOpen(false)}>
            Fechar documentação
          </Button>
          {documentationTexts.map((text, index) => (
            <Accordion
              key={index}
              title={text.title}
              description={text.description}
            />
          ))}
        </Sheet>
      </Drawer>
    </React.Fragment>
  );
}
