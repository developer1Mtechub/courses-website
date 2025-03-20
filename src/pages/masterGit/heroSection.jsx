
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext"
import CircleIcon from "@mui/icons-material/Circle";
const HeroSection = () => {
  const theme = useTheme(); 
  const { themeMode } = useContext(ThemeContext); 
  return (
<Box
  sx={{
    // width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    border: "none",
    // pb: 25,
    height:"99vh",
    position: "relative",
    zIndex: 2,
    "@media (max-width: 900px)": {
      pb: 5,
    },
  }}
>
<Button
      variant="contained"
      sx={{
        backgroundColor: "background.navbar", // Default MUI blue
        // mt:13,
        "@media (max-width: 900px)": {
        //  mt:5,
        },
        // color: "white",
        color: themeMode === "dark" 
                    ? "white"  // ✅ Dark Mode Background
                    : "secondary.dark",
        textTransform: "none",
        fontSize:"13px",
        display: "flex",
        alignItems: "center",
        gap: "8px", // Space between dot and text
        padding: "2px 3px",
          border:"1px solid rgba(189, 197, 206, 0.23)",
        borderRadius: "6px",
        boxShadow:"none",
        "&:hover": {
            borderColor:"none"
        //   backgroundColor: "#1565c0", // Darker blue on hover
        },
      }}
    >
      <CircleIcon sx={{ fontSize: 10, color: "#1565c0",   }}  /> New Course
    </Button>
   <Box  className='hero_texts' sx={{maxWidth:"100%",display:"flex",flexDirection:"column", alignItems: "center"}}>
   
         <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 , 
         mt:8,
         fontSize:"60px",
             "@media (max-width: 900px)": {
           mt:3,
            },
       
         WebkitMaskImage: themeMode === "dark" 
         ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
         : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
       maskImage: themeMode === "dark" 
         ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
         : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
         }}>
        Master Git & GitHub
         </Typography>
         <Typography color="primary.description" sx={{fontWeight:"500", fontSize: "18px",mt:4,
              "@media (max-width: 900px)": {
               mt:2,
              },
          lineHeight: "1.4" }}>
         <span style={{fontWeight:"700"}}>Learn</span> to expertly navigate <span style={{fontWeight:"700"}}>Git</span> and <span style={{fontWeight:"700"}}>GitHub </span>for <span style={{fontWeight:"700"}}>collaboration</span> at every level.         </Typography>

                <Box sx={{width:"60%",display:"flex",flexDirection:"row",gap:2,margin:"0 auto",mt:10,
                
                         "@media (max-width: 900px)": {
                            width:"100%",
                            mt:4,
                                },
                }}>
                      <Button variant="contained" sx={{ 
                              textTransform: "capitalize", 
                              width: "100%", 
                              py: 0.6, 
                            //   px:5,
                              boxShadow: "none", 
                              color: "#1E293B", 
                              fontSize: "15px", 
                              borderRadius:"6px",
                              fontWeight:"600",
                              transition:"color 0.3s ease-in-out",
                              background: "linear-gradient(133.85deg, #73dcec 20.72%, #22d3ee 36.26%, #27b0ed 81.99%)", 
                              "&:hover": { boxShadow: "none",color:'white' } 
                            }}>
                          Purchase Now
                            </Button>
                      
                      <Button variant="contained" sx={{ 
                              textTransform: "capitalize", 
                              width: "100%", 
                              py: 0.6, 
                              boxShadow: "none", 
                              color: themeMode === "dark" 
                              ? "white"  // ✅ Dark Mode Background
                              : "black",
                              fontSize: "14px", 
                              borderRadius:"6px",
                              backgroundColor: "background.navbar", 
                              border:"1px solid rgba(189, 197, 206, 0.23)",
                              transition:"backgroundColor 0.3s ease-in-out",
                              "&:hover": { boxShadow: "none",
                              backgroundColor: themeMode === "dark" 
                                ? "rgba(4, 30, 63, 0.96)"  // ✅ Dark Mode Background
                                : "white",
                                border:"none"
                                // backgroundColor:"rgba(4, 30, 63, 0.96)"
                               } 
                            }}>
                       Learn More
                            </Button>
                </Box>

      </Box>
  
    </Box>
  );
};
export default HeroSection;