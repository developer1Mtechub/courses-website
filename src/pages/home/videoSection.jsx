import React from "react";
import { Box, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import ReactPlayer from "react-player";
import { ThemeContext } from "../../theme/themeContext";
import { HOME_PAGE_VIDEO_SECTION_HEADING,HOME_PAGE_VIDEO_SECTION_DESCRIPTION,HOME_PAGE_VIDEO_SECTION_TEXT } from "../../textConstant/textconstants";
function VideoSection() {
      const theme = useTheme();
      const { themeMode } = useContext(ThemeContext); 
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
          sx={{mt:30,     mb:26,   "@media (max-width: 900px)": {
            mt: 2, 
            mb:0,
            // height:"130vh"
          },}}      
    >
      <Box textAlign="center" mb={2}>
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
       {HOME_PAGE_VIDEO_SECTION_HEADING}
         </Typography>
         <Typography color="primary.description" sx={{fontWeight:"600", textAlign:"center",pl:3, maxWidth: "500px", fontSize: "20px", lineHeight: "1.4" ,
            "@media (max-width: 900px)": 
            {
              pl:1,
              pr:1
          
            } 
         }}>
         {HOME_PAGE_VIDEO_SECTION_DESCRIPTION}
         </Typography>
      </Box>
      {/* Video Placeholder */}
      <Box
        // width="100%"
    
        height={550}
    //  backgroundColor="#201734"
        display="flex"
        alignItems="flex-end"
        justifyContent="flex-end"
        borderRadius={4} 
        p={2}
        sx={{
          width: { xl: "75%",sm: "93%",md:"84%" },
          maxWidth: { xl: "100%", sm: "100%", md: "100%" }, 
          backgroundColor: themeMode === "dark" 
          ? " #224ab7"  // ✅ Dark Mode Background
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
    <Box sx={{
     width: { 
      xl: "81%",sm: "84%",md:"91%" ,
   
      mt:2,
     },
    "@media (max-width: 900px)": {
          width:"100%",
          textAlign:"justify"
          // mt: 205, 
          // height:"130vh"
        },}} mt={3}>
   <Typography
  color="#6d7079"
  sx={{ px: 5, margin: "0 auto", fontWeight: 600, fontSize: "18px", lineHeight: 1.4, pt: 1 }}
  dangerouslySetInnerHTML={{ __html: HOME_PAGE_VIDEO_SECTION_TEXT }}
/>
        </Box>

    </Box>
  );
}

export default VideoSection;

