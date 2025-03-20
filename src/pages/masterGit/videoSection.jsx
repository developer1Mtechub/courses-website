import React from "react";
import { Box, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext"
import ReactPlayer from "react-player";
function VideoSection() {
      const theme = useTheme(); // Get the theme colors
      const { themeMode } = useContext(ThemeContext); 
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
          sx={{mt:16,    "@media (max-width: 900px)": {
            mt: 2, 
            // height:"130vh"
          },}}       
    >
      <Box  sx={{width:"100%",pl:14,
    px:{lg:14,xl:28},
   "@media (max-width: 900px)": {
 pl:1, 
  },
      }} textAlign="left" mb={2}>
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 , 
        // WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
        //  maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)",
        WebkitMaskImage: themeMode === "dark" 
        ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
        : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
      maskImage: themeMode === "dark" 
        ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
        : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
         }}>
        Lesson Sneak Peek
         </Typography>
         <Typography color="primary.description" sx={{fontWeight:"500", textAlign:"left",pl:0,  fontSize: "18px", lineHeight: "1.4" }}>
         Dive into this free lesson - a sneak peek into the comprehensive learning journey that awaits you in this course
         </Typography>
      </Box>

      {/* Video Placeholder */}

      <Box
        width="85%"
      
        height={550}
    //  backgroundColor="#201734"
        display="flex"
        alignItems="flex-end"
        justifyContent="flex-end"
        borderRadius={4}
        
        p={2}
     
        sx={{
          width: { xl: "74%",sm: "80%",md:"85%" },
          // width: { xl: "80%",sm: "80%",md:"85%" },
          backgroundColor: themeMode === "dark" 
          ? "#201734"  // ✅ Dark Mode Background
          : "rgba(211, 211, 211, 0.24)",
          mt:5,"@media (max-width: 900px)": {
            mt: 2, 
            // height:"130vh"
          }}}
      >
     <ReactPlayer 
        url="https://youtu.be/GGli3uBqUts?si=yrBATV17THxIhI-z"
        width="100%"
        height="100%"
        controls
      />
      </Box>

    </Box>
  );
}

export default VideoSection;