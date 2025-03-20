


import React from "react";
import { Box, Card, CardContent, Typography, Grid, Avatar, Chip } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import project14 from "../../assets/project14.svg";

import project15 from "../../assets/project15.png"
import project16 from "../../assets/project16.png"
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext"
import { CODE_CARDS_HEAD,CODE_CARDS_DESCRIPTION, CODE_SPONSORS_BOTTOM_LINK, CODE_CARDS_TOP_HEAD } from "../../textConstant/textconstants";
import { courseDescriptions,courses } from "../../textConstant/textconstants";


const Cards = () => {
      const theme = useTheme(); 
      const { themeMode } = useContext(ThemeContext); 
  return (
    <Box sx={{ textAlign: "center", p: 4, color: "white",mt:15,
      "@media (max-width: 900px)": {
        mt:3,
         },
     }}>
      {/* Heading */}
     <Typography variant="h3" color='primary.main' sx={{ fontWeight: "600", mb: 1 , mt:8,fontSize:"45px",lineHeight:1,
                "@media (max-width: 900px)": {
              mt:3,
               },
            WebkitMaskImage: themeMode === "dark" 
            ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 50%)" 
            : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
          maskImage: themeMode === "dark" 
            ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 50%)" 
            : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
            }}>
{CODE_CARDS_HEAD}
            </Typography>
      <Typography  color='primary.description' sx={{ mb: 6,fontWeight:"500",fontSize:"18px" }}>
     {CODE_CARDS_DESCRIPTION}
      </Typography>

        {/* Featured Course */}
        {/* item xs={12} sm={6} md={5} */}
        <Grid container sx={{
          //  px: 10,
           px: { md: 10, lg: 10, xl: 25}
            }}>
      <Card

        sx={{  display: "flex",
          alignItems: "stretch",       gap: 0,
         width: "55%",
         "@media (max-width: 900px)": {
         width:"100%"
           },
         boxShadow:"none",
          // backgroundColor:"#020617" ,
          backgroundColor: themeMode === "dark" ? " #020617": " #eff2f3",
            borderRadius: 3,   p: 2,pl:1,pr:1,
            border: themeMode === "dark" ? "1px solid rgba(200, 202, 209, 0.09)": "1px solid rgba(189, 197, 206, 0.27)",
        //  border:"1px solid rgba(200, 202, 209, 0.09)"
          }}  >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent:"flex-start",
            flexDirection: "column",
            p: 1,
            pr:0,
             pl:1,
            height: 330, 
            overflowY: "auto",
            transition: "background-color 0.3s ease", 
            "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbar in Webkit browsers
            "-ms-overflow-style": "none", // Hide scrollbar in IE and Edge
            "scrollbar-width": "none"
  
          }}
        >
          <Typography  color='secondary.dark' sx={{ mb: 1,fontSize:"13px",textAlign:"left" }}>
     {CODE_CARDS_TOP_HEAD}
          </Typography>
          {courseDescriptions.map((desc, index) => (
            <Box key={index} sx={{py:1, textAlign: "left" ,pl:1,pr:0,
              borderRadius:2,
              
              "&:hover": { 
                // bgcolor: " #1b1f2e" 
                backgroundColor: themeMode === "dark" ? "  #1b1f2e": " rgba(211, 211, 211, 0.54)",

              }, 
            }}>
              <Typography  sx={{ fontWeight: "500",fontSize:"16px" }}>
                {desc.title}
              </Typography>
              <Typography  color='secondary.dark'>
                {desc.text}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Right Section: Static Image and Details */}
        <Box
          sx={{
            flex: 1, 
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position:"relative",
            p: 1,
            pl:0,
            pt:0,
            gap: 0,
            // backgroundColor:" #1b1f2e",
            backgroundColor: themeMode === "dark" ? "  #1b1f2e": " rgba(211, 211, 211, 0.62) ",
            border: themeMode === "dark" ? "1px solid rgba(200, 202, 209, 0.09)": "1px solid rgba(189, 197, 206, 0.27)",

            borderRadius:2,
            ml:2, 
            mt:1, mb:1,mr:1,
              transition: "transform 0.3s ease-in-out", // Smooth zoom effect
            "&:hover": {
              transform: "scale(1.05)", // Zoom in on hover
            },
          
 
          }}
        >
  <img src={project14} style={{width:"80%", objectFit:"contain",marginTop:"30px"}}/>
  <img src={project15} style={{position:"absolute",top:10,right:10, width:"14%",height:"13%",borderRadius:"100px"}}/>
  <img src={project16} style={{position:"absolute",top:60,right:10, width:"14%",height:"13%",borderRadius:"100px"}}/>
 
          <Typography  sx={{p:0, fontWeight: "600" ,fontSize:"20px",   lineHeight: 1, }}>
            React Native Course
          </Typography>
          <Typography color='secondary.dark' sx={{pb:1,fontSize:"15px" ,pt:0.8}}>
         53 Lessons| +12 hours
          </Typography>
        </Box>
      </Card>
    </Grid>

      <Grid container spacing={3} justifyContent="center" sx={{mt:0,ml:0,
          px: { md: 0, lg: 0, xl:15}
      }}>
 
        {courses.map((course, index) => (
          <Grid item xs={12} sm={6} md={3.65} key={index}>
            <Card sx={{
              //  backgroundColor:"#020617", 
              boxShadow:"none",
              backgroundColor: themeMode === "dark" ? " #020617": " #eff2f3",
              border: themeMode === "dark" ? "1px solid rgba(200, 202, 209, 0.09)": "1px solid rgba(189, 197, 206, 0.27)",

                // border:"1px solid rgba(200, 202, 209, 0.09)",
              borderRadius: 2, py:0.5,px:0,
              transition: "transform 0.3s ease-in-out", // Smooth zoom effect
              "&:hover": {
                transform: "scale(1.05)", // Zoom in on hover
              }, 
              }}>
                      <CardContent sx={{ textAlign: "center", position: "relative" }}>
       
          <img src={course.logo} style={{ width: 300, height: 200, mx: "auto", mb: 0 }} />
          {course.new && (
            <Chip
              label="New Course!"
            
              sx={{
                color:"black",
                backgroundColor:"#bae6fd",
                border:"1px solid #7dd3fc",
                position: "absolute",
                top: 190,
                left: 13,
                fontSize: "14px",
                py:0,
                px:0,
                px: 0, // Adjust horizontal padding
                height: "24px", // Explicit height to remove extra spacing
                minHeight: "20px", // Ensure no extra vertical padding
                lineHeight: "20px" 
              }}
            />
          )}
          <Typography sx={{ fontWeight: "600", fontSize: "20px", textAlign: "left" }}>{course.title}</Typography>
          <Typography color="secondary.dark" sx={{ textAlign: "left", fontSize: "16px" }}>
            {course.description}
          </Typography>
        </CardContent>

            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Cards;