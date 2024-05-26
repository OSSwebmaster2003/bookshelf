import React from "react";
import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const BasicInput = ({ placeholder }) => {
  const theme = useTheme();

  return (
    <TextField
      InputProps={{
        style: { color: "#606266", lineHeight: "40px" },
      }}
      id="name"
      placeholder={placeholder}
      type="text"
      autoComplete="off"
      name="name"
      required
      fullWidth
      size="small"
      sx={{
        fontSize: "16px",
        lineHeight: "19px",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: theme.palette.dark.grey,
          },
          "&:hover fieldset": {
            borderColor: theme.palette.dark.grey,
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.dark.grey,
          },
        },
      }}
    />
  );
};

export default BasicInput;
