
import React from "react";
import { Card, CardContent, Grid, Typography, Avatar, Box } from "@mui/material";
// import mainimage from "../../assets/mainimage.webp";
import { Twitter, Butterfly, LinkedIn, Discord, Youtube } from "../../assets/icons";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext";
import mainimage from "../../assets/mainimage.jpeg"
import { HOME_PAGE_BEHIND_SECTION_HEADING,HOME_PAGE_BEHIND_SECTION_DESCRIPTION,HOME_PAGE_BEHIND_SECTION_TEXT1,HOME_PAGE_BEHIND_SECTION_TEXT2
,HOME_PAGE_BEHIND_SECTION_TEXT3,HOME_PAGE_BEHIND_SECTION_TEXT4,HOME_PAGE_BEHIND_SECTION_TEXT5,HOME_PAGE_BEHIND_SECTION_TEXT6,
HOME_PAGE_BEHIND_SECTION_TEXT7
 } from "../../textConstant/textconstants";
const MainSection = () => {
      const theme = useTheme(); // Get the theme colors
      const { themeMode } = useContext(ThemeContext); 
  return (
    <Box sx={{ 
      width: { xl: "80%",sm: "80%",md:"89%" },
         backgroundColor: "none",margin: "0 auto", padding: 3, boxShadow: 0, mt: 15 ,  "@media (max-width: 900px)": {
        width:"100%",
     
        // height:"130vh"
      }}}>
      {/* Heading Section */}
      <Box textAlign="start" mb={2}>
        <Typography
          variant="h3"
          sx={{
            pl: 1,
            fontWeight: "bold",
            mb: 1,
            // WebkitMaskImage: "linear-gradient(to top, rgba(119, 103, 103, 0) 0%, black 30%)",
            // maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)",
            WebkitMaskImage: themeMode === "dark" 
            ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
            : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
          maskImage: themeMode === "dark" 
            ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
            : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
          }}
        >
         {HOME_PAGE_BEHIND_SECTION_HEADING}
        </Typography>
        <Typography
          color="primary.description"
          sx={{
            textAlign: "start",
            fontWeight:"600",
            pl: 1,
            maxWidth: "560px",
            fontSize: "18px",
            lineHeight: "1.4",
          }}
        >
    {HOME_PAGE_BEHIND_SECTION_DESCRIPTION}
        </Typography>
      </Box>

      {/* Content Section */}
      <Grid
        container
        spacing={3}
        alignItems="center"
        direction={{ xs: "column", md: "row" }}
        sx={{
          backgroundColor: themeMode === "dark" 
          ? "#0f1323" 
          : "rgba(211, 211, 211, 0.24)",
          // opacity:0.7,
          // backgroundColor:"background.default",
          borderRadius: 2,
          px: 0,
          width: "100%",
          margin: "0 auto",
          mt:7,
        
        }}
      >
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <CardContent sx={{ p: 0 , opacity:0.7, "@media (max-width: 900px)": {
            // width:"100%",
            pr:3,
            pl:0,
           textAlign:"justify"
            // height:"130vh"
          }}}>
         <Typography color="primary.links" sx={{fontSize:"17px",fontWeight:"400",mt:1,}} >
{HOME_PAGE_BEHIND_SECTION_TEXT1}      </Typography>
         <Typography  color="primary.links" sx={{fontSize:"17px", mt: 2,fontWeight:"400" }}>
{HOME_PAGE_BEHIND_SECTION_TEXT2}                 </Typography>
            <Typography color="primary.links" sx={{fontSize:"17px", mt: 2 ,fontWeight:"400"}}>
{HOME_PAGE_BEHIND_SECTION_TEXT3}
 </Typography>
 <Typography color="primary.links" sx={{ fontSize:"17px",mt: 2,fontWeight:"400" }}>
{HOME_PAGE_BEHIND_SECTION_TEXT4}
</Typography>
<Typography color="primary.links" sx={{fontSize:"17px", mt: 2 ,fontWeight:"400"}}>
{HOME_PAGE_BEHIND_SECTION_TEXT5} </Typography>
 <Typography color="primary.links" sx={{fontSize:"17px", mt: 2,fontWeight:"400" }}>

{HOME_PAGE_BEHIND_SECTION_TEXT6}</Typography>
<Typography color="primary.links" sx={{fontSize:"17px", mt: 6,fontWeight:"400" }}>

{HOME_PAGE_BEHIND_SECTION_TEXT7} </Typography>

            {/* Social Icons */}
            <Box sx={{ display: "flex", gap: 2, alignItems: "center", mt: 3 }}>
              {/* <Twitter className="icon2" /> */}
              <Box sx={{ color: "#979aa2", "&:hover svg": { color: themeMode === "dark"   ? "white"  : "black", }
              , cursor: "pointer" }}>
           <Twitter />
             </Box>
             <Box sx={{ color: "#979aa2", "&:hover svg": { 
          color: themeMode === "dark" ? "white"  : "black", }, cursor: "pointer" }}>
           <Butterfly />
            </Box>
         <Box sx={{ color: "#979aa2", "&:hover svg": { 
        color: themeMode === "dark" ? "white" : "black",  }, cursor: "pointer" }}>
  <LinkedIn />
</Box>
<Box sx={{ color: "#979aa2", "&:hover svg": {
color: themeMode === "dark" 
? "white" 
: "black"
   ,}, cursor: "pointer" }}>
  <Discord />
</Box>

<Box sx={{ color: "#979aa2", "&:hover svg": {
color: themeMode === "dark" 
? "white" 
: "black",
    }, cursor: "pointer" }}>
  <Youtube />
</Box>
            
            </Box>
          </CardContent>
        </Grid>

        {/* Image Section */}
        <Grid 
  item 
  xs={12} 
  md={6} 
  display="flex" 
  justifyContent="center"
>
  <img
    src={mainimage}
    alt="Beto"
    style={{

      width: "100%",
      maxWidth: "500px",
      height: "auto",
      borderRadius: "10px",
      objectFit: "cover",
      marginBottom:"20px",
      cursor:"pointer",
          opacity:themeMode === "dark"  ? 1 : 1,  // Ensures full opacity
    filter: themeMode === "dark"  ? "none" : "none"
    }}
    className="responsive-image"
/>
</Grid>
      </Grid>
  </Box>
  );
};

export default MainSection;
