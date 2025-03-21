
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext"
import heroline from "../../assets/heroline.png";
import herolinelight from "../../assets/herolinelight.png";
import frame1 from "../../assets/frame1.png";
import frame2 from "../../assets/frame2.png";
import { HOME_PAGE_HERO_TITLE,HOME_PAGE_HERO_DESCRIPTION,HOME_PAGE_HERO_START_BUTTON,HOME_PAGE_HERO_COURSE_DETAILS } from "../../textConstant/textconstants";
import { 
  AppStore, ExpoRouter, EASInsight, EASWorkflows, 
  EASUpload, IAP, ONESignal, EXPOEas, MetaDate, SupaBase, EAsBuild ,EasSubmit,Testing,Expo,Reanimated,Gestures,Figma,Stripe
} from "../../assets/icons";
const icons = [
  { Component: AppStore, name: "App Store", top: "7%", left: "13%" },
  { Component: Testing, name: "Testing", top: "5%", left: "24%" },
  { Component: Expo, name: "Expo", top: "60%", left: "31%" },
  { Component: ExpoRouter, name: "Expo Router", top: "14%", left: "2%" },
  { Component: EASInsight, name: "EAS Insight", top: "24%", left: "18%" },
  { Component: EASWorkflows, name: "EAS Workflows", top: "45%", left: "10%" },
  { Component: EASUpload, name: "EAS Update", top: "42%", left: "23%" },
  { Component: IAP, name: "IAP", top: "78%", left: "30%" },
  { Component: EXPOEas, name: "Expo Eas", top: "38%", left: "85%" },
  { Component: MetaDate, name: "EAS Metadate", top: "34%", left: "73%" },
  { Component: SupaBase, name: "SupaBase", top: "12%", left: "92%" },
  { Component: EAsBuild, name: "EAS Build", top: "2%", left:"86%" },
  { Component: Gestures, name: "Gestures", top: "5%", left: "70%" },
  { Component: EasSubmit, name: "EAS Submit", top: "20%", left:"80%" },
  { Component: Figma, name: "Figma", top: "53%", left:"74%" },
  { Component: ONESignal, name: "One Signal", top: "76%", left: "69%" },
  { Component: Stripe, name: "Stripe", top: "73%", left:"60%" },
  { Component: Reanimated, name: "Reanimated", top: "74%", left:"40%" },

];
const HeroSection = () => {
  const theme = useTheme(); 
  const { themeMode } = useContext(ThemeContext); 
  const scrollToPricing = () => {
    document.getElementById("pricing-section")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToCourses = () => {
    document.getElementById("courses-section")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box 
    sx={{
      // minHeight: "100vh", 
      height:"95vh",
      width: "100vw", 
      boxSizing: "border-box",
        overflow:"hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        textAlign: "center",
        border:"none",
      pb:30,
        position: "relative",
        background: themeMode === "light"
        ? "linear-gradient(to right, #dceaff 30%, rgba(238, 174, 202, 0.6) 70%)"
        : "none", 
      backgroundImage: themeMode === "dark" ? `url(${frame1})` :`url(${frame2})`,
      backgroundSize: "cover", 
      backgroundPosition: "center",  
      backgroundRepeat: "no-repeat", 
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 30,
          left: 0,
          width: "100%",
          height: "30%", 
          filter: "blur(80px)", 
          zIndex: 0,
        },
        "@media (max-width: 900px)": {
          pb:10,
        },
        "@media (max-width: 648px)": {
        },
      }}

    >



        <Box  className='hero_texts' sx={{maxWidth:"900px",display:"flex",flexDirection:"column",   alignItems: "center"}}>
      <Box sx={{ display: "flex" ,alignItems: "center", gap: 1 }}>
 <Typography
 className=''
    variant="h1"
    sx={{
        zIndex:20,
         maxWidth: "600px",
      fontWeight: "900",
      color: "primary.main",
      position: "relative",
      display: "inline-block",
      pt:{lg:14,xl:20,sm:10,},
      WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
      maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
      "@media (max-width: 648px)": {
       pt:8,
      },
    }}
  >
       {HOME_PAGE_HERO_TITLE}
  </Typography>
</Box>
      <Typography variant="body5" className='hero_text' sx={{ marginTop:"10px",textAlign:"center",
      fontSize:"20px" ,
      fontWeight:"500",
          // maxWidth: "700px",
          maxWidth: { xl: "700px",sm: "500px",md:"500px" },
          zIndex:"10", color: "secondary.text" }}>
            {HOME_PAGE_HERO_DESCRIPTION}
      </Typography>
      <Button
  className="hero_button"
  sx={{
    fontSize: "16px",
    backgroundColor:"primary.hero",
    color:"white",
    // color: "#1e3549",
    fontWeight: "bold",
    padding: "0px 75px",
    // height:"40px",
    borderRadius: "6px",
    marginTop: "22px",
    maxWidth: "520px",
    textDecoration: "none",
    textTransform: "none",
    boxShadow: "none",
    opacity: 0.8,
    border: "none",
    zIndex: 20,
    transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.02)", // Optional hover effect
      opacity: 1,
    },
  }}
  onClick={scrollToPricing}
>
       {HOME_PAGE_HERO_START_BUTTON}
        </Button>
<Button
        variant="text"
        sx={{
          marginTop: "20px",
          fontSize: "16px",
          zIndex:20,
          color: "primary.main",
          fontWeight:"semi-bold",
          textTransform: "none", // Keeps the text in normal case
          padding: "4px 75px", // Adds padding to make it look like a button
          borderRadius: "4px", // Rounds the corners
          transition: "background-color 0.3s ease",
          transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out", // Smooth transition on hover
          "&:hover": {
            backgroundColor: "rgba(232, 233, 255, 0.16)", // Background color on hover
            transform: "scale(1.05)",
          },
        }}
        onClick={scrollToCourses}
      >
       {HOME_PAGE_HERO_COURSE_DETAILS}
      </Button> 
      </Box>
      <Box className='hero_icons' sx={{ position: "absolute", width: "100%", height: "100%" }}>
        {icons.map(({ Component, name, top, left }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            // style={{ position: "absolute", top, left, textAlign: "center" }}
            style={{ position: "absolute", top: `${top}`, left: `${left}`, textAlign: "center",  }}>
            <Component sx={{ fontSize: 40 }} />
            <Typography variant="caption" sx={{ display: "block", fontSize: "14px", fontWeight: "semi-bold" }}>
              {name}
            </Typography>
          </motion.div>
        ))}
      </Box>
    </Box>

  );
};
export default HeroSection;




