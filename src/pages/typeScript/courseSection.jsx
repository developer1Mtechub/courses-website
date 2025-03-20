
import React, { useState } from "react";
import { Box, Typography, Grid, Collapse } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext"

import { TYPESCRIPT_COURSES_HEADING,TYPESCRIPT_COURSES_DESCRIPTION,coursesTypescript } from "../../textConstant/textconstants";


function CourseSection() {
  const [expandedIds, setExpandedIds] = useState([]);

  const handleToggle = (id) => {
    setExpandedIds((prevExpandedIds) =>
      prevExpandedIds.includes(id)
        ? prevExpandedIds.filter((expandedId) => expandedId !== id)
        : [...prevExpandedIds, id]
    );
  };
    const theme = useTheme(); // Get the theme colors
    const { themeMode } = useContext(ThemeContext); 
  return (
    <Box
      sx={{
        mt: 14,
 
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "center",
        textAlign: "start",
        padding: 2,
        "@media (max-width: 648px)": {
            mt: 0, 
            // height:"130vh"
          },
      }}
      
    >
        <Box sx={{width:"87%",
     px:{lg:0,xl:14}
        }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 , 
      WebkitMaskImage: themeMode === "dark" 
      ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
      : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
    maskImage: themeMode === "dark" 
      ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
      : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
      }}>
    {TYPESCRIPT_COURSES_HEADING}
      </Typography>
      <Typography color="primary.description" sx={{fontWeight:"600", pt:2,fontSize: "18px", lineHeight: "1.4" }}>
{TYPESCRIPT_COURSES_DESCRIPTION}      </Typography>
      </Box>

      <Grid container spacing={3} sx={{  width: "100%",
    maxWidth: { xs: "100%", sm: "100%", md: "100%" }, 
     mt: 3,px:10, 
     px:{md:10,lg:10,xl:25},
       "@media (max-width: 900px)": {
        px:0,
    
        // height:"130vh"
      }, }}>
        {coursesTypescript.map((course) => (
          <Grid item xs={12} sm={6} md={6} key={course.id}>
            <Box
              onClick={() => handleToggle(course.id)}
              sx={{
                
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
                borderRadius: 2,
                
                // bgcolor: "rgba(211, 211, 211, 0.24)",
              //  backgroundColor:"background.default",
          //  backgroundColor:"#FFFFFF0D",
          backgroundColor: themeMode === "dark" 
          ? "#FFFFFF0D"  // ✅ Dark Mode Background
          : "rgba(211, 211, 211, 0.24)",
                // opacity:0.6,
                border: "1px solid rgba(211, 211, 211, 0.14)",
                transition: "background-color 0.2s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  //  bgcolor: "rgba(211, 211, 211, 0.5)" 
                  backgroundColor: "rgba(143, 154, 207, 0.2)" ,

                  // opacity:0.8

                },
                "@media (max-width: 900px)": {
        px:1,
    
        // height:"130vh"
      }
              }}
            >
            
              <Box sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  {course.icon}

                  <Typography variant="subtitle1" color="primary.main" fontWeight={500} >
                    {course.title}
                  </Typography>
                </Box>
                {expandedIds.includes(course.id) ? (
                  <KeyboardArrowUp color='primary.main' />
                ) : (
                  <KeyboardArrowDown color='primary.main' />
                )}
              </Box>
              <Collapse in={expandedIds.includes(course.id)} timeout={{ enter: 500, exit: 500 }} sx={{ display: "flex", flexDirection: "column",minHeight: "80px"}}>
                <Typography  color='primary.description' sx={{ mt: 1,fontSize:"16px",fontStyle:"italic" ,textAlign:"left" ,pl:1}}>
                  {course.description}
                </Typography>
              </Collapse>
        
        
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CourseSection;