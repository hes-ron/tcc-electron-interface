import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import { Card as MaterialCard } from "@mui/joy";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { useNavigate } from "react-router-dom";
import { SidebarContext } from "../../contexts/sidebar";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonOnClickUrl: string;
  icon: React.ReactNode;
  color: string;
}

export default function Card({
  title,
  description,
  buttonText,
  buttonOnClickUrl,
  icon,
  color,
}: CardProps) {
  const navigate = useNavigate();
  const { setPage } = React.useContext(SidebarContext);

  return (
    <MaterialCard
      onClick={() => {
        navigate(buttonOnClickUrl);
        setPage(buttonOnClickUrl);
      }}
      data-resizable
      sx={{
        textAlign: "center",
        alignItems: "center",
        width: 343,
        overflow: "auto",
        resize: "horizontal",
        "--icon-size": "100px",
        cursor: "pointer",
      }}
    >
      <CardOverflow variant="solid" sx={{ backgroundColor: color }}>
        <AspectRatio
          variant="outlined"
          ratio="1"
          sx={{
            m: "auto",
            transform: "translateY(50%)",
            borderRadius: "50%",
            width: "var(--icon-size)",
            boxShadow: "sm",
            bgcolor: "background.surface",
            position: "relative",
          }}
        >
          <div>{icon}</div>
        </AspectRatio>
      </CardOverflow>
      <Typography level="title-lg" sx={{ mt: "calc(var(--icon-size) / 2)" }}>
        {title}
      </Typography>
      <CardContent sx={{ maxWidth: "40ch" }}>
        <Typography level="body-md">{description}</Typography>
      </CardContent>
      <CardActions
        orientation="vertical"
        buttonFlex={1}
        sx={{
          "--Button-radius": "40px",
          width: "clamp(min(100%, 160px), 50%, min(100%, 200px))",
        }}
      >
        <Button
          onClick={() => navigate(buttonOnClickUrl)}
          variant="solid"
          sx={{ backgroundColor: color }}
        >
          {buttonText}
        </Button>
      </CardActions>
    </MaterialCard>
  );
}
