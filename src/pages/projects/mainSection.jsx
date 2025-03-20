
import React from "react";
import { Grid, Box, Card, CardMedia, CardContent, Button, Typography, TextField, List, ListItem, Link } from "@mui/material";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext"
import project1 from "../../assets/project1.jpg"
import project2 from "../../assets/project2.jpg"
import project3 from "../../assets/project3.jpg"
import project4 from "../../assets/project4.jpg"
import project5 from "../../assets/project5.jpg"
import project6 from "../../assets/project6.jpg"
import project7 from "../../assets/project7.jpg"
import project8 from "../../assets/project8.jpg"
import project9 from "../../assets/project9.jpg"
import project10 from "../../assets/project10.jpg"
import project11 from "../../assets/project11.jpg"
import project12 from "../../assets/project12.jpg"
import project13 from "../../assets/project13.jpeg"
import { useNavigate } from "react-router-dom";
const MainSection = () => {
    const navigate=useNavigate("")
  const theme = useTheme(); 
  const { themeMode } = useContext(ThemeContext); 
  const projects = [
    {
      price: "22 Jan 2025",
      head: "EAS Build Webhook",
      description: "Learn how to create a webho...",
      image: project1
    },
    {
      price: "24 Dec 2024",
      head: "Shopping List App",
      description: "Build a Local-First Shopping ...",
      image: project2
    },
    {
      price: "08 Dec 2024",
      head: "Expo Mesh Gradient",
      description: "Expo Mesh Gradient build wit..",
      image: project3
    },
    {
      price: "18 Aug 2024",
      head: "Obscura Pro Camera ...",
      description: "Obscura Pro Camera clone b...",
      image: project4
    },
    {
      price: "14 Jul 2024",
      head: "Notion Clone",
      description: "Local-First Notion Clone built...",
      image: project5
    },
    {
      price: "30 Jun 2024",
      head: "React Navigation For...",
      description: "Learn about React Navigati...",
      image: project6
    },
    {
      price: "29 Jun 2024",
      head: "React navigation v7",
      description: "Learn about the new React...",
      image: project7
    },
    {
      price: "28 Jun 2024",
      head: "Expo Linear Gradient",
      description: "Learn to use react-native-gift..",
      image: project8
    },
    {
      price: "26 Jun 2024",
      head: "React Native Charts T..",
      description: "Learn to use react-native-gift..",
      image: project9
    },
    {
      price: "30 Jun 2024",
      head: "Snapchat Camera Clo...",
      description: "Learn to build a Snapchat like..",
      image: project10
    },
    {
      price: "29 Jun 2024",
      head: "Master SF Symbols in...",
      description: "In-depth tutorial on using the...",
      image: project11
    },
    {
      price: "28 Jun 2024",
      head: "Blur Bottom Sheet w..",
      description: "Here is my new video! in this...",
      image: project12
    },
  ];
     const handleCourse=()=>{
        navigate("/learn")
     }
     const handleTypescript=()=>{
        navigate("/learnReact")
     }     
     const handleGithub=()=>{
        navigate("/learnGit")
     }
  return (
    <Grid 
      container 
      sx={{ 
        display: "flex",
        flexDirection: "row",
        "@media (max-width: 900px)": {
          flexDirection: "column",
        }
      }}
    >
      {/* Main content area - Projects */}
      <Grid
        item
        xs={12}
        md={10}
        sx={{
          height: { xs: "auto", md: "100vh" },
          overflowY: "auto",
          p: 3,
          pr: { xs: 3, md: 0 },
          scrollbarWidth: "none", // Hides scrollbar for Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Hides scrollbar for Chrome, Safari, Edge
          },
        }}
      >
        <Box 
          sx={{ 
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" }, 
            gap: 2, 
            flexWrap: "wrap", 
            mt: 2.5,
          }}
        >
          <Box sx={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
            <Typography 
              variant="h3" 
              sx={{
                fontWeight: "600",
                textAlign: "start",
                fontSize: "36px", 
                mb: 1,
                lineHeight: "1.1",
                WebkitMaskImage: themeMode === "dark" 
                  ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 50%)" 
                  : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 40%)",
                maskImage: themeMode === "dark" 
                  ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 50%)" 
                  : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 40%)",
                color: themeMode === "dark" ? "primary.main" : "black"
              }}
            >
              Projects
            </Typography>

            <Typography 
              color="primary.description" 
              sx={{ fontWeight: 400, fontSize: "20px", lineHeight: 1 }}
            >
              Beautiful handmade-crafted projects
            </Typography>
          </Box>

          <TextField 
            variant="outlined" 
            placeholder="Search"
            sx={{ 
              flexGrow: 1,
              maxWidth: "330px",
              border: "1px solid rgba(202, 166, 166, 0)",
              borderRadius: "8px",
              width: { xs: "100%", sm: "auto" }
            }} 
            InputProps={{
              sx: {
                py: 0.5,
                height: "40px",
                borderRadius: "6px",
                marginRight: "25px"
              }
            }}
          />
        </Box>

        <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={3} sx={{ mt: 1, gap: 1 }}>
              <Card 
                sx={{
                  boxShadow: "none", 
                  p: 0,
                  border: "1px solid rgba(211, 211, 211, 0.16)",
                  backgroundColor: themeMode === "dark" ? "#0f1323" : "rgba(211, 211, 211, 0.38)", 
                  color: "white",
                  borderRadius: 4,
                  transition: "opacity 0.3s ease-in-out",
                  cursor: "pointer",
                  "&:hover": {
                    opacity: 0.8
                  },
                }}
              >
                <CardMedia 
                  component="img" 
                  height="100%" 
                  width="100%" 
                  image={project.image} 
                  sx={{ objectFit: "contain" }} 
                  alt={project.head} 
                />
                <CardContent sx={{ textAlign: "left" }}>
                  <Typography variant="body2" color="secondary.dark" sx={{ fontWeight: "500", fontSize: "12px" }}>
                    {project.price}
                  </Typography>
                  <Typography variant="body2" color="primary.main" sx={{ fontWeight: "500", pt: 0.7, fontSize: "18px" }}>
                    {project.head}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, fontSize: "14px" }} color='secondary.dark'>
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Sidebar - Support section */}
      <Grid
        item
        xs={12}
        md={2}
        sx={{
          position: { xs: "static", md: "sticky" },
          top: 0,
          right: 0,
          height: { xs: "auto", md: "100vh" },
          py: 3,
          px: { xs: 3, md: 0 },
          pr: { xs: 3, md: 2 },
          mt: { xs: 2, md: 0 }, // Add margin-top on small screens
          borderTop: { xs: "1px solid rgba(211, 211, 211, 0.16)", md: "none" }, // Add border on top for small screens
          paddingTop: { xs: 4, md: 3 }, // Add more padding on top for small screens
        }}
      >
        <Typography variant="h5" fontWeight="600" sx={{ fontSize: "17px" }}>
          Support Our Community
        </Typography>
        <Typography variant="body2" color='primary.links' mt={1}>
          Take your skills to the next level by enrolling in our courses!
        </Typography>
        <Typography sx={{ pt: 1, color: "#0d97d8", fontSize: "15px" ,cursor:"pointer"}} onClick={handleCourse}>
          React Native Course
        </Typography>
        <Typography sx={{ pt: 1, color: "#0d97d8", fontSize: "15px" ,cursor:"pointer"}} onClick={handleTypescript}>
          Master React with TypeScript
        </Typography>
        <Typography sx={{ pt: 1, color: "#0d97d8", fontSize: "15px",cursor:"pointer" }} onClick={handleGithub}>
          Master Git & Github
        </Typography>
        <Box sx={{ backgroundColor: "primary.main", pt: 2, pl: 2, mt: 4, pb: 2 }}>
          <img src={project13} style={{ width: "70%", objectFit: "contain" }} alt="Promotion" />
          <Typography sx={{ color: "#333333", fontSize: "14px", mt: 1 }}>
            Build your website for just $3.88/mth. More values and performance with NameCheap
          </Typography>
        </Box>
        <Typography color='primary.main' sx={{ mt: 2, fontSize: "14px" }}>
          Your support helps us continue creating valuable resources for everyone. ❤️
        </Typography>
      </Grid>
    </Grid>
  );
};

export default MainSection;



