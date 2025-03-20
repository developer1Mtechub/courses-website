
import React from "react";
import { Container, Typography, Button, Grid, Card, CardContent, List, ListItem, ListItemIcon, Box, keyframes } from "@mui/material";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext";
import { TYPESCRIPT_PRICING_HEADING,TYPESCRIPT_PRICING_DESCRIPTION,TYPESCRIPT_PRICING_TEXT ,pricingData} from "../../textConstant/textconstants";

const fadeAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
`;
const Pricing = () => {
    const theme = useTheme();
    const { themeMode } = useContext(ThemeContext); 
  return (
    <Container sx={{ textAlign: "center", py: 5, mt: 16, "@media (max-width: 900px)": { mt: 1, px: 3 } }}>
   <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 , textAlign:"start",
    WebkitMaskImage: themeMode === "dark" 
    ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
    : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
  maskImage: themeMode === "dark" 
    ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
    : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
      }}>
        {TYPESCRIPT_PRICING_HEADING}
      </Typography>
      <Typography color='primary.description' sx={{fontWeight:"500", textAlign: "start",  margin: "0 auto", fontSize: "16px", lineHeight: "1.4" }}>
{TYPESCRIPT_PRICING_DESCRIPTION}         </Typography>
      <Typography color='primary.description' sx={{fontWeight:"500", textAlign: "left",  margin: "0 auto", fontSize: "16px", lineHeight: "1.4",pt:3, }}>
     {TYPESCRIPT_PRICING_TEXT}

</Typography>
       <Grid container spacing={3} justifyContent="center" sx={{ 
   mt: 3, 
   maxWidth: "800px", 
   margin: "0 auto", 
   overflow: "hidden", 
   px: 2,
   "@media (max-width: 900px)": { maxWidth:"100%",p:0,margin:"10 auto"} 
 }}>
  {pricingData.map((plan, index) => (
    <Grid item xs={12} sm={6} key={index} sx={{ 
        // display: "flex", 
        justifyContent: "center", 
        "@media (max-width: 786px)": { width: "100%", display: "flex", justifyContent: "center" } 
      }}>
      <Card sx={{ 
    backgroundColor: themeMode === "dark" 
    ? "background.navbar" 
    : "#f2f2f2", 
    marginTop: index === 0 ? "150px" : "40px", 
        overflow: "visible", 
        position: "relative", 
        py: 1, 
        pb: 3, 
        boxShadow: "none", 
        border: "1px solid rgba(218, 235, 238, 0.09)", 
        width: "100%", 
        height: "auto", 
        maxWidth: "400px", // Ensuring it doesn’t take full width on mobile
        "@media (max-width: 786px)": { width: "100%", maxWidth: "350px", margin: "0 auto" } 
      }}>
        <Box
          sx={{
            position: "absolute",
            top: "-12px",
            left: "50%",
            transform: "translate(-50%, 0)",
            backgroundColor: "#F0F9FF",
            color: "#0284C7",
            fontWeight: "bold",
            fontSize: "13px",
            px: 1.5,
            py: 0.2,
            border: "1px solid #0284C7",
            borderRadius: "5px",
            boxShadow: "none",
            zIndex: 200,
            "@media (max-width: 900px)": { width: "180px" }
          }}
        >
          {plan.title}
        </Box>
        <Typography variant="h2" sx={{ fontWeight: "bold", pt: 1 }}>
          {plan.oldPrice && (
            <Typography component="span" color='primary.description' sx={{ 
              textAlign: "start", 
              textDecoration: "line-through", 
              display: "block", 
              // color: "#0F172A80", 
     pl:3,
              fontSize: "36px", 
              fontWeight: "800", 
              mr: 1 
            }}>
                
              {plan.oldPrice}
            </Typography>
          )}

        <Typography 
  component="span" 
  sx={{ 
    fontSize: "56px", 
    fontWeight: "bold", 
    textAlign:"center",
    // border:"1px solid red",
  
    color: "primary.main"  // Customize this
  }}
>
  {plan.price}
</Typography>
          <Typography component="span" color='primary.description' sx={{fontWeight:"600", fontSize: "18px", }}>{plan.duration}</Typography>
          <Typography component="span" color='primary.description' sx={{fontWeight:"600", fontSize: "19px",textAlign:"center",  display: "block", mt: 0.6,ml:0, }}>{plan.subscription}</Typography>
          <Typography component="span" color='primary.cards' sx={{ fontSize: "14px", pt: 1, pb: 2, width: "240px", margin: "0 auto", display: "block", textAlign: "center" }}>{plan.head}</Typography>
        </Typography>
        <CardContent sx={{ textAlign: "left", p: 1 }}>
          <List sx={{ p: 0 }}>
            {plan.features.map((feature, idx) => (
              <ListItem key={idx} sx={{ py: 0, px: 1, display: "flex", alignItems: "center", mb: 1.5, gap: 0.5 }}>
                <DoneOutlinedIcon sx={{ color: "#26c661", fontSize: "16px", mr: 1 }} />
                <Typography variant="body2"  sx={{fontSize: "14px",   color: themeMode === "dark" 
    ? "primary.cards" 
    : "#475569",
    transition: "color 0.3s ease", // Smooth transition effect
    "&:hover": {
      color: themeMode === "dark" 
      ? "white" 
      : "#475569", 
    },
    }} >{feature}</Typography>
         
              </ListItem>
            ))}
          </List>
        </CardContent>
        <Button variant="contained" sx={{ 
          textTransform: "capitalize", 
          width: "80%", 
          py: 0.5, 
          boxShadow: "none", 
          color: "#1E293B", 
          fontSize: "14px", 
          background: "linear-gradient(133.85deg, #73dcec 20.72%, #22d3ee 36.26%, #27b0ed 81.99%)", 
          "&:hover": { boxShadow: "none" } 
        }}>
          {plan.buttonText}
        </Button>
      </Card>
    </Grid>
  ))}
</Grid>

    </Container>
  );
};

export default Pricing;