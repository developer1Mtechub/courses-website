import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({ children, onClick, themeMode }) => { 
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        borderRadius: "6px",
        padding: "6px 20px",
        color: themeMode === "dark" ? "white" : "white",
        textTransform: "none",
        boxShadow: "none",
        fontSize: "14px",
        backgroundColor: "primary.button",
        fontWeight: 500,
        "&:hover": {
          boxShadow: "none",
          backgroundColor: themeMode === "dark" ? " #ffb402" : "#0f172a",
          color: themeMode === "dark" ? "white" : "white",
         opacity: themeMode === "dark" ? "1" : "0.8",
          border: "none",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
