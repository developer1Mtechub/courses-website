import React from "react";
import { Box,Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";
import resources1 from "../../assets/resources1.webp"
import resources2 from "../../assets/resources2.webp"
import resources3 from "../../assets/resources3.webp"
import resources4 from "../../assets/resources4.webp"
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext"
const projects = [
  {

    price: "$24.99 USD",
    description: "A premium app designed for cou..",
    image: resources1 // Replace with actual image URL
  },
  {

    price: "$14.99 USD",
    description: "Multi-user chat application. Th...",
    image: resources2,
  },
  {

    price: "$24.99 USD",
    description: "Incorporating GPT-3 to Deliver...",
    image: resources3,
  },
  {

    price: "$24.99 USD",
    description: "React Native Stripe Template...",
    image: resources4,
  },
];

const resourcesCards = () => {
           const theme = useTheme(); // Get the theme colors
                const { themeMode } = useContext(ThemeContext); 
  return (
    <Box sx={{ padding: "0", backgroundColor: "none", color: "white",mt:20,pl:5,pr:2,
      "@media (max-width: 900px)": {
        mt:0,
          },
     }}>
      <Typography variant="h4" gutterBottom sx={{fontSize:"25px",
        color:themeMode==="dark"?"":"black"
      }}>Production ready projects</Typography>
      <Typography variant="body1" gutterBottom color='secondary.dark'>
      Save time and resources and get your projects off the ground faster. Get projects designed to be scalable, and maintainable, and ready for customization.
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={3} sx={{mt:4,gap:1,}}>
            <Card sx={{boxShadow:"none", border:"1px solid rgba(211, 211, 211, 0.35)",backgroundColor:themeMode==="dark"? "#0f1323":"rgba(211, 211, 211, 0.38)", color: "white", borderRadius: 2 ,
             transition: "transform 0.3s ease-in-out",
             cursor:"pointer",
             "&:hover": {
               transform: "scale(1.05)",
             },

            }}>
              <CardMedia component="img" sx={{width:"100%", height:"100%" ,objectFit:"contain"}} image={project.image} alt={project.title} />
              <CardContent sx={{textAlign:"right"}}>

                <Typography variant="body2" color="primary.main" sx={{fontWeight:"500",fontSize:"16px"}}>
                  {project.price}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 ,fontSize:"16px"}} color='secondary.dark' >
                  {project.description}
                </Typography>
                <Button
                  variant="contained"
                  // color="primary.main"
                  fullWidth
                  sx={{ mt: 2, backgroundColor: "#3d404d", 
                    color:     themeMode==="dark"? "primary.main":"black",
                    textTransform:"capitalize",
                    width:"50%",
                    py:0.3,
                    fontSize:"14px",
                    //  backgroundColor: " #dbdbdb",
                     fontWeight:"300",
                     boxShadow:"none",
                     border:"1px solid rgba(211, 211, 211, 0.1)",
                     borderRadius:1.5,
                     "&:hover": { boxShadow: "none" },
                  }}
                >
                  Purchase Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="body2" align="center"  color='secondary.dark' sx={{ mt: 3,fontSize:"17px"}}>
        More coming soon...
      </Typography>
      <Typography color='primary.main' sx={{pt:3,}}>
      Looking for a particular template or project? <span style={{color:"#0d95d4"}}>Contact us</span>
      </Typography>
    </Box>
  );
};

export default resourcesCards;
