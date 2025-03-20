
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import {  Card, CardContent, Avatar, Link } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext"
import CircleIcon from "@mui/icons-material/Circle";
import code from "../../assets/code.png";
import codedark from "../../assets/codedark.png";
import codelight from "../../assets/codelight.png";
import codelogo1 from "../../assets/codelogo1.webp"
import codelogo2 from "../../assets/codelogo2.webp";
import codesoft from "../../assets/codesoft.png";
import { CODE_HERO_TITLE,CODE_HERO_DESCRIPTION,CODE_HERO_TOP_BUTTON,CODE_HERO_STARTED_BUTTON,CODE_HERO_COURSES_BUTTON } from "../../textConstant/textconstants";
const HeroSection = () => {
  const theme = useTheme(); 
  const { themeMode } = useContext(ThemeContext); 
  const textVariant = {
    hidden: { opacity: 0, y: 20},
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
<Box
 sx={{
      position: "relative",
      width: "100vw",
      height: "91%",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      textAlign: "center",
      pb:{xl:20,lg:15,},
      // pb: { xs: 10, md: 30 ,xl:35},
      boxSizing: "border-box",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        margin:"0 auto",
        maxWidth:"1700px",
        height: "100%",
        backgroundImage: themeMode === "dark" ? `url(${codesoft})` :`url(${codesoft})`,
        backgroundPosition: "center",
        filter: "blur(140px)",
        // zIndex:990
      }}
    />


<motion.div variants={textVariant} initial="hidden" animate="visible">

<Button
      variant="contained"
      sx={{
        backgroundColor: themeMode === "dark" ? "rgba(27, 30, 47, 0.56)": "#eff2f3",
        // backgroundColor: "#1b1e2f",
        mt:20,
        color: themeMode === "dark" ? "white": "black",
        textTransform: "none",
        fontSize:"13px",
        display: "flex",
        alignItems: "center",
        gap: "8px", 
        padding: "7px 30px",
          border:"1px solid rgba(189, 197, 206, 0.44)",
        borderRadius: "20px",
        boxShadow:"none",
        transition: "transform 0.3s ease-in-out",
        cursor:"pointer",
        "@media (max-width: 900px)": {
          mt:9,
     padding:"7px 10px"
         },
        "&:hover": {
            borderColor:"none",
            transform: "scale(1.05)",
        //   backgroundColor: "#1565c0", // Darker blue on hover
        },
      }}
    >
     ✨ {CODE_HERO_TOP_BUTTON} ✨
    </Button>
    </motion.div>

   <Box  className='hero_texts' sx={{maxWidth:"100%",display:"flex",flexDirection:"column", alignItems: "center"}}>
   <motion.div variants={textVariant} initial="hidden" animate="visible">

         <Typography variant="h3" sx={{ maxWidth:"800px",fontWeight: "900", mb: 1 , mt:6,fontSize:"89px",lineHeight:1,
             "@media (max-width: 900px)": {
           mt:3,
            },
         WebkitMaskImage: themeMode === "dark" 
         ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 20%)" 
         : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
       maskImage: themeMode === "dark" 
         ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 20%)" 
         : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
         }}>
{CODE_HERO_TITLE}
         </Typography>
         </motion.div>
         <motion.div variants={textVariant} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
        <Typography 
  color='primary.description' sx={{maxWidth:"650px",fontWeight:"400", fontSize: "22px",mt:2,
         
    "@media (max-width: 900px)": {
     mt:2,
    },
lineHeight: "1.4" }}
  dangerouslySetInnerHTML={{ __html:CODE_HERO_DESCRIPTION }}
/>
        </motion.div>

                <Box sx={{width:"80%",display:"flex",flexDirection:"row",gap:2,margin:"0 auto",mt:6,px:1,
                
                         "@media (max-width: 900px)": {
                            width:"100%",
                            flexDirection:"column",
                            mt:4,
                                },
                }}>
                      <Button variant="contained" sx={{ 
                              textTransform: "capitalize", 
                              width: "100%", 
                              py: 1.5, 
                            //   px:5,
                              boxShadow: "none", 
                              color: "#1E293B", 
                              fontSize: "18px", 
                              borderRadius:"6px",
                              fontWeight:"600",
                              transition:"color 0.3s ease-in-out",
                              background: "linear-gradient(133.85deg, #73dcec 20.72%, #22d3ee 36.26%, #27b0ed 81.99%)", 
                              "&:hover": { boxShadow: "none",color:'white' } 
                            }}>
                     {CODE_HERO_STARTED_BUTTON}
                            </Button>
                      
                      <Button variant="contained" sx={{ 
                              textTransform: "capitalize", 
                              width: "100%", 
                              py: 0.6, 
                              boxShadow: "none", 
                              color: themeMode === "dark" 
                              ? "white"  // ✅ Dark Mode Background
                              : "black",
                              fontSize: "18px", 
                              borderRadius:"6px",
                              backgroundColor: "transparent", 
                              border:"1px solid rgba(189, 197, 206, 0.23)",
                              transition:"backgroundColor 0.3s ease-in-out",
                              "&:hover": { boxShadow: "none",
                              backgroundColor: themeMode === "dark" 
                                ? "rgba(4, 30, 63, 0.96)"  // ✅ Dark Mode Background
                                : " rgba(189, 197, 206, 0.49)",
                                border:"none"
                                // backgroundColor:"rgba(4, 30, 63, 0.96)"
                               } 
                            }}>
                      {CODE_HERO_COURSES_BUTTON}
                            </Button>
                </Box>





      </Box>


    </Box>

  </>
  );
};
export default HeroSection;





