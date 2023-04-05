import { Typography } from "@mui/material";
import React from "react";

const Logo = () => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{ fontFamily: "Encode Sans Expanded", color:"#fff", letterSpacing: "-0.45rem" }}
      >
        Rexchange<span className="dot">.</span>
      </Typography>
    </>
  );
};

export default Logo;
