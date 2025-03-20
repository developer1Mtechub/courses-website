
import React from "react";
import { Box, Card, CardContent, Typography, Avatar, Link } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext"
import codelogo1 from "../../assets/codelogo1.webp"
import codelogo2 from "../../assets/codelogo2.webp"
import {sponsors,CODE_SPONSORS_HEAD,CODE_SPONSORS_BOTTOM_DESCRIPTION,CODE_SPONSORS_BOTTOM_HEAD,CODE_SPONSORS_BOTTOM_LINK} from "../../textConstant/textconstants"


const SponsorCards = () => {
  const theme = useTheme(); 
  const { themeMode } = useContext(ThemeContext); 

  return (
    <Box sx={{ textAlign: "center", pt: 0, color: "white" ,
      mt:18,
      mt: { md: 4, lg: 0, xl: 4 , xs: 8,}
    }}>
      <Typography variant="h4" color='primary.main' sx={{
        // color:"#cdd2d7"
        mt: {  lg: 3, xl:2},
        color: themeMode === "dark" ? "#cdd2d7": "primary.main"
        , fontWeight: "600", mb: 3 ,fontSize:"30px",
           
      "@media (max-width: 900px)": {
  fontSize:"20px"
                },
      }}>
     {CODE_SPONSORS_HEAD}
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "flex-start", gap: 1.4, flexWrap: "wrap", maxWidth: "calc(100% - 30px)", 
      
      "@media (max-width: 900px)": {
    justifyContent:"center",
    // border:"1px solid red",
    ml:2,
            },
        // px:30, 
        px: { md: 14, lg: 14, xl: 30 }
        }}>
        {sponsors.map((sponsor, index) => (
          <Card
            key={index}
            sx={{
              width: 375,
              backgroundColor: themeMode === "dark" ? " #0f1c33": " #eff2f3",
              border: themeMode === "dark" ? "1px solid rgba(211, 211, 211, 0.1)": "1px solid  rgba(189, 197, 206, 0.44)",
         
              // bgcolor: " #0f1c33",
              color: "white",
              borderRadius: 2,
              boxShadow:"none",
              px: 2,
              py: 0,
              cursor:"pointer",
              transition: "opacity 0.3s ease-in-out",
              "&:hover": {
                opacity: "0.7",
              },
            }}
          >
            <CardContent sx={{ textAlign: "center",p:0,py:2 }}>
              <Avatar src={sponsor.logo} alt={sponsor.name} sx={{ width: 100, height: 100, mx: "auto", mb: 2,mt:0.5 }} />
              <Typography variant="h6"  sx={{
                  color: themeMode === "dark" ? "": "black",
                 fontWeight: "600", fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
                {sponsor.name}
                <Link href={sponsor.link} target="_blank" color="secondary.dark" sx={{ fontWeight: "400", display: "flex", alignItems: "center" }}>
                  <OpenInNewIcon style={{fontSize:"18px"}} />
                </Link>
              </Typography>
              <Typography variant="body2" color="primary.description" sx={{ fontSize: "16px", pt: 2,fontWeight:"500" }}>
                {sponsor.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box sx={{ mt: 5 }}>
        <Typography variant="body1" sx={{ fontWeight: "500", fontSize: "18px" }}>
        {CODE_SPONSORS_BOTTOM_HEAD}
        </Typography>
        <Typography variant="body2" color="primary.description" sx={{ fontSize: "16px",fontWeight:"500",pt:0.3,pb:0.3 }}>
        {CODE_SPONSORS_BOTTOM_DESCRIPTION}
        </Typography>
        <Link color="primary.main" sx={{ fontWeight: "500",cursor:"pointer" , "&:hover": {
              color:"primary.main"
              },}}>
                 {CODE_SPONSORS_BOTTOM_LINK}
        </Link>
      </Box>
    </Box>
  );
};

export default SponsorCards;
