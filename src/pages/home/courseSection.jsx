
import React, { useState } from "react";
import { Box, Typography, Grid, Collapse } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext"
import { HOME_PAGE_COURSES_TITLE,HOME_PAGE_COURSES_DESCRIPTION } from "../../textConstant/textconstants";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArticleIcon from '@mui/icons-material/Article';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import coursesData from "../../data/courses.json";
import EditIcon from '@mui/icons-material/Edit';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import OpenWithIcon from '@mui/icons-material/OpenWith';
import ScienceIcon from '@mui/icons-material/Science';
import NotificationsIcon from '@mui/icons-material/Notifications';
import StorageIcon from '@mui/icons-material/Storage';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import PublishIcon from '@mui/icons-material/Publish';
import UpdateIcon from '@mui/icons-material/Update';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import PaymentsIcon from '@mui/icons-material/Payments';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';


function CourseSection() {
  const [expandedIds, setExpandedIds] = useState([]);

  const handleToggle = (id) => {
    setExpandedIds((prevExpandedIds) =>
      prevExpandedIds.includes(id)
        ? prevExpandedIds.filter((expandedId) => expandedId !== id)
        : [...prevExpandedIds, id]
    );
  };
    const theme = useTheme(); 
    const { themeMode } = useContext(ThemeContext); 
    const iconMap = {
      bulb: <LightbulbOutlinedIcon color="primary" />,
     api:<ArticleIcon color='primary'/>,
     style:<EditIcon color='primary'/>,
     expo:<SwapVertIcon color='primary'/>,
     animation:<OpenWithIcon color='primary'/>,
     testing:<ScienceIcon color='primary'/>,
     notifications:<NotificationsIcon color='primary'/>,
     backend:<StorageIcon color='primary'/>,
     build:<BuildCircleIcon color='primary'/>,
     submit:<PublishIcon color='primary'/>,
     update:<UpdateIcon color='primary'/>,
     workflows:<IntegrationInstructionsIcon color='primary'/>,
     publish:<PublishIcon color='primary'/>,
     payment:<PaymentsIcon color='primary'/>,
     bonus:<CardGiftcardIcon color='primary'/>

    };
  return (
    <Box
      sx={{
        mt: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 2,
           
        "@media (max-width: 648px)": {
            mt: 0, 
          },
      }}
      
      
    >
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 , 
      WebkitMaskImage: themeMode === "dark" 
      ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
      : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
    maskImage: themeMode === "dark" 
      ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
      : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
      }}>
     {HOME_PAGE_COURSES_TITLE}
      </Typography>
      <Typography  id="courses-section" color="primary.description" sx={{fontWeight:"600", maxWidth: "500px", fontSize: "18px", lineHeight: "1.4" }}>
  {HOME_PAGE_COURSES_DESCRIPTION}
      </Typography>
   
      <Grid    container spacing={3} sx={{  width: "100%",
    maxWidth: { xl: "85%", sm: "150%", md: "100%",lg:"100%" },  mt: 4,
    px:10,   
    "@media (max-width: 900px)": {
        px:0,
        width:"100%",
        pl:0,
        pr:0,
        // border:"1px solid red",
        margin:"0 auto",
        mt:4,
        ml:1,

      },
      "@media (min-width: 900px) and (max-width: 1024px)": {
        px:0,
        width:"90%"
      }

       }}>
  
    <Grid container spacing={2} >
      {coursesData.map((course) => (
        <Grid item xs={12} sm={6} md={4} key={course.id}>
          <Box
            onClick={() => handleToggle(course.id)}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px",
              borderRadius: 2,
              backgroundColor:
                themeMode === "dark"
                  ? "#FFFFFF0D"
                  : "rgba(211, 211, 211, 0.24)",
              // border: "1px solid rgba(211, 211, 211, 0.14)",
              border:
              themeMode === "dark"
                ? "1px solid rgba(211, 211, 211, 0.14)"
                : "1px solid rgba(211, 211, 211, 0.4)",
              transition: "background-color 0.2s ease-in-out",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(143, 154, 207, 0.2)",
              },
              "@media (max-width: 900px)": {
                px: 1,
              },
            }}
          >

            <Box
              sx={{ display: "flex",   alignItems: "center", width: "100%",justifyContent: "space-between",}} >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Typography variant="subtitle1" fontWeight={600} color="primary.main" sx={{pt:0.5}}>
                {iconMap[course.course_icon_name]} 
                </Typography>
                <Typography  variant="subtitle1" color="primary.main"
                  fontWeight={500}
                  sx={{  fontSize: '17px', "@media (max-width: 900px)": {  fontWeight: "400", fontSize: "14px", },
                  }}
                >
                  {course.course_title}
                </Typography>
              </Box>
              {expandedIds.includes(course.id) ? (
                <KeyboardArrowUp color="primary" />
              ) : (
                <KeyboardArrowDown color="primary" />
              )}
            </Box>
            <Collapse
              in={expandedIds.includes(course.id)}
              timeout={{ enter: 500, exit: 500 }}
              sx={{  display: "flex", flexDirection: "column",  minHeight: "80px",  width: "100%",
              }}
            >
              <Typography
             color='primary.description' 
             sx={{ mt: 1, fontSize: "16px",textAlign:"left" ,pl:0.5,fontWeight:"400"}} >
                {course.course_description}
              </Typography>
              <ul 
                style={{paddingLeft: "23px",
                  marginTop: "10px",
                  listStyleType: "disc",
                  width: "100%",
                  color: theme.palette.primary.description, 
                }}
              >
                {course.course_content.map((item, index) => (
                  <li key={index} color='primary.description' style={{ marginBottom: "8px", }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        pr: 1,
                        color:"primary.description",
                        fontStyle:"italic"
                      }}
                    >
                      <Typography >{item.title}</Typography>
                      <Typography  >
                        {item.duration_in_min} min
                      </Typography>
                    </Box>
                  </li>
                ))}
              </ul>
            </Collapse>
          </Box>
        </Grid>
      ))}
    </Grid>
      </Grid>

    </Box>
  );
}

export default CourseSection;



