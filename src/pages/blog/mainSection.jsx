import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext"
const data = [
  { title: "Hey 👋 I'm Beto — A Life in Changelog", description: "Wed 25 Dec 2024" },
  { title: "My Experience Working as a SWE III at Walmart", description: "Tue Jul 23 2024." },
  { title: "Understanding JavaScript Closures", description: "Thu Jan 26 2023" },
  { title: "Fibonacci Algorithm Different Solutions in JavaScript", description: "Tue May 24 2022" },
  { title: "Search Filter React Native | Search Bar Tutorial", description: "Thu March 17 2022" },
  { title: "How to use Redux with React Native", description: "Mon Feb 21 2022" },
];

const MainSection = () => {
        const theme = useTheme(); // Get the theme colors
        const { themeMode } = useContext(ThemeContext); 
  return (
    <Container sx={{width:"100%"}}>
      {/* Left Side: Heading and Description */}
      <Box sx={{ textAlign: "left", marginBottom: 4,mt:8,ml:4, }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 ,  fontSize:"60px",
          WebkitMaskImage: themeMode === "dark" 
          ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
          : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
        maskImage: themeMode === "dark" 
          ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
          : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
          }}>
            Blog
          </Typography>
          <Typography color="primary.description" sx={{fontWeight:"500", fontSize: "20px", lineHeight: "1.4" }}>
          Read my thoughts on software engineering, and more.          </Typography>
      </Box>

      {/* Grid of 6 Boxes */}
      <Grid container direction="column" spacing={3}>

        {data.map((item, index) => (
          <Grid item xs={12} sm={12} md={12} key={index} >
            <Box
             
              sx={{
                backgroundColor:'none',
                padding: 0,
                borderRadius: "8px",
                textAlign: "left",
                pl:4,
                "&:hover": { backgroundColor: "none" },
              }}
            >
              <Typography variant="h6" fontWeight="400"  sx={{
    "&:hover": { textDecoration: "underline" }, // Underline on hover
  }} >
                {item.title}
              </Typography>
              <Typography variant="body2" color="secondary.dark">
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MainSection;
