import React from "react";
import { Button } from "@mui/material";

const PrimaryButton = ({ children }) => {
  return (
    <Button
      variant="contained"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
        lineHeight: "20.08px",
        fontWeight: "500",
        padding: "10px",
        borderRadius: "4px",
      }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
