
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, List, ListItem, Link, IconButton } from "@mui/material";
import CustomIcon from "../../assets/customicon";
import { Moon, Laptop, Sun } from "../../assets/icons";
import { ThemeContext } from "../../theme/themeContext"; 
 import {FOOTER_DATA} from "../../textConstant/textconstants"
const Footer = () => {
  const navigate = useNavigate();
  const { themeMode, toggleDarkMode, toggleLightMode, toggleSystemMode } = useContext(ThemeContext);
  const handleNavigation = (path) => () => {
    navigate(path);
  };
  return (
    <Box sx={{ color: "black", p: 3, mt: 2 }}>
      <Box 
  sx={{
    width: "100%", 
    borderBottom: `1px solid ${themeMode === "dark" ? "rgba(211, 211, 211, 0.12)" : "rgba(211, 211, 211, 0.77)"}`, 
    mt: 2, 
  }}
/>
      <Grid container spacing={1} justifyContent="space-between" sx={{ mt: 4 }}>
        <Grid item xs={12} sm={4} sx={{ px: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton edge="start" color="inherit">
              <CustomIcon style={{ color: "inherit", cursor: "pointer" }} />
            </IconButton>
            <Typography 
              variant="h6"  
              color="primary.main" 
              sx={{ fontWeight: "700", cursor: "pointer" }} 
              onClick={handleNavigation("/")}
            >
              Code with Beto
            </Typography>
          </Box>
        </Grid>
        {FOOTER_DATA.map((section, index) => (
          <Grid key={index} item xs={6} sm={2}>
            <Typography variant="h6" fontWeight="bold" color="primary.main" sx={{pl:1.2,
          
            }}>
              {section.title}
            </Typography>
            <List dense>
              {section.links.map((link, idx) => (
                <ListItem key={idx} sx={{
                  "@media (max-width: 648px)": {
                    fontSize:"14px",
                    // border:"1px solid red",
                    p:0,
                    py:1
           
                        },
                }} >
                  <Link
                    component="button"
                    color="primary.description"
                    underline="none"
                    onClick={handleNavigation(link.path)}
                    sx={{
                  
                      "&:hover": {
                        color: themeMode === "dark" ? "white" : "black",
                        textDecoration: "underline",
         
                      
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
        <Box 
          sx={{
            backgroundColor: themeMode === "dark" ? "background.modal" : "rgba(211, 211, 211, 0.342)",
            // backgroundColor: "background.modal",
            cursor: "pointer",
            color: "white",
            py: 0.5, px: 1, mt: 5,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            gap: 3,
            alignItems: "center"
          }}
        >
          <IconButton onClick={toggleDarkMode} color={themeMode === "dark" ? "primary" : "default"}>
            <Moon />
          </IconButton>

          <IconButton onClick={toggleSystemMode} color={themeMode === "system" ? "primary" : "default"}>
            <Laptop />
          </IconButton>

          <IconButton onClick={toggleLightMode} color={themeMode === "light" ? "primary" : "default"}>
            <Sun />
          </IconButton>
        </Box>

        {/* <p className="footer_line" style={{ marginTop: "47px" }}></p> */}
        <Box 
  sx={{
    width: "100%", 
    borderBottom: `1px solid ${themeMode === "dark" ? "rgba(211, 211, 211, 0.12)" : "rgb(211, 211, 211)"}`, 
    mt: 5, // Adjust margin as needed
  }}
/>

      </Grid>
    </Box>
  );
};

export default Footer;

