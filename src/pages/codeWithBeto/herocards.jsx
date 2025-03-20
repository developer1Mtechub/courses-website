import React from "react";
import { Box,Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";

import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext"
import { CODE_HERO_CARDS_HEAD,CODE_HERO_CARDS_DESCRIPTION,CODE_HERO_CARDS_BUTTON } from "../../textConstant/textconstants";
import {projects } from "../../textConstant/textconstants"

const heroCards = () => {
           const theme = useTheme();
                const { themeMode } = useContext(ThemeContext); 
  return (
    <Box sx={{ padding: "0", backgroundColor: "none",mt:31,px:13,pb:25,
      "@media (max-width: 900px)": {
        mt:0,
        px:2,
          },
     }}>
         
  <Typography variant="h3" sx={{fontWeight: "700", mb: 1 , mt:6,textAlign:"center",
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
{CODE_HERO_CARDS_HEAD}
         </Typography>
      <Typography variant="body1" gutterBottom color='primary.description' sx={{maxWidth:"800px",margin:"0 auto",
        textAlign:"center",fontSize:"18px",fontWeight:"600",pb:6,}}>
   {CODE_HERO_CARDS_DESCRIPTION}
          </Typography>
      <Grid container spacing={3} justifyContent="flex-start" alignItems="stretch"
            sx={{     "@media (max-width: 900px)": {

               },        px: {xs:1, md: 0, lg: 0, xl:15}}}>
        {projects.map((project, index) => (
          <Grid  item key={index} xs={12} sm={6} md={4} sx={{ gap: 1 ,
          }}>
            <Card sx={{boxShadow:"none", border:"1px solid rgba(211, 211, 211, 0.35)",backgroundColor:themeMode==="dark"? "#0f1323":"rgba(211, 211, 211, 0.38)", color: "white", borderRadius: 2 ,
             transition: "transform 0.3s ease-in-out",
             cursor:"pointer",
             "&:hover": {
               transform: "scale(1.05)",
             },

            }}>
              <CardMedia component="img" sx={{width:"100%", height:"100%" ,objectFit:"contain"}} image={project.image} alt={project.title} />
              <CardContent sx={{textAlign:"right",p:1.5}}>
                <Typography variant="body2" color="primary.main" sx={{fontWeight:"500",fontSize:"16px",pr:0.5}}>
                  {project.price}
                </Typography>
                <Typography variant="body2" sx={{textAlign:"left" ,mt: 1 ,fontSize:"16px",width:"100%"}} color='secondary.dark' >
                  {project.description}
                </Typography>
                <Button
                  variant="contained"
                  // color="primary.main"
                  fullWidth
                  sx={{ mt: 2, 
                    // backgroundColor: "#3d404d", 
                    backgroundColor: themeMode === "dark" ? "#3d404d": "rgb(211, 211, 211)",

                    color:     themeMode==="dark"? "primary.main":"black",
                    textTransform:"capitalize",
                    width:"45%",
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
                 {CODE_HERO_CARDS_BUTTON}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default heroCards;