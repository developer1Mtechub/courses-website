
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext"
import reacttype from "../../assets/reacttype.svg";
// import codes from "../../assets/codes.png"
import code from "../../assets/code.png"
import frame3 from "../../assets/frame3.png";
import frame4 from "../../assets/frame4.png";
import { TYPESCRIPT_HERO_HEADING,TYPESCRIPT_HERO_DESCRIPTION,TYPESCRIPT_HERO_START_BUTTON,TYPESCRIPT_HERO_COURSES_BUTTON } from "../../textConstant/textconstants";
const HeroSection = () => {
  const theme = useTheme(); 
  const { themeMode } = useContext(ThemeContext); 
  return (
<Box
  sx={{
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    border: "none",
    // pt:10,
    pb: 10,
    position: "relative",
    zIndex: 2,
    height:"99vh",
      //  backgroundImage: themeMode === "dark" ? `url(${code})` :``,
            backgroundImage: themeMode === "dark" ? `url(${frame3})` :`url(${frame4})`,
            backgroundSize: "cover", 
            backgroundPosition: "center",  
            backgroundRepeat: "no-repeat", 


    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "30%",
      filter: "blur(20px)",
      zIndex: 0,
    },

    "@media (max-width: 900px)": {
      pb: 10,
    },
  }}
>

        <Box  className='hero_texts' sx={{
          // maxWidth:"600px",
          maxWidth: { xl: "700px",sm: "500px",md:"500px" },
          display:"flex",flexDirection:"column", alignItems: "center"}}>
      <Box sx={{ display: "flex",  alignItems: "center", gap: 1 }}>
 <Typography
 className=''
    variant="h1"
    sx={{
        zIndex:20,
      fontWeight: "900",
      color: "primary.main",
      position: "relative",
      display: "inline-block",
      mt:3,
lineHeight:"1.1",
      WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
      maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
    }}
  >
   {TYPESCRIPT_HERO_HEADING}
  </Typography>
</Box>
      <Typography variant="body5" className='hero_text' sx={{ 
          maxWidth: { xl: "400px",sm: "500px",md:"300px" },
        marginTop:"10px",zIndex:"10", color: "secondary.text" }}>
 {TYPESCRIPT_HERO_DESCRIPTION}
      </Typography>
  <button className="hero_button">
          {TYPESCRIPT_HERO_START_BUTTON}
        </button>
<Button
        variant="text"
        sx={{
          marginTop: "20px",
          fontSize: "15px",
          zIndex:20,
          color: "primary.main",
          fontWeight:"semi-bold",
          textTransform: "none",
          padding: "4px 75px", 
          borderRadius: "4px", 
          transition: "background-color 0.3s ease",
          transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out", 
          "&:hover": {
            backgroundColor: "rgba(232, 233, 255, 0.16)",
            transform: "scale(1.05)",
          },
        }}
      >
       {TYPESCRIPT_HERO_COURSES_BUTTON}
      </Button> 
      </Box>
  
    </Box>
  );
};
export default HeroSection;