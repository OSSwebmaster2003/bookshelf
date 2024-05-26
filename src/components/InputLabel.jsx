import React from "react";
import { InputLabel } from "@mui/material";
import { useTheme } from "@emotion/react";

const Label = ({ children }) => {
  const theme = useTheme();
  return (
    <InputLabel
      required
      sx={{
        color: theme.palette.dark.main,
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "16.8px",
      }}
    >
      {children}
    </InputLabel>
  );
};

export default Label;
