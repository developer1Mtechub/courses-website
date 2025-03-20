

import React from "react";
import { Container, Typography, Button, Grid, Card, CardContent, List, ListItem, ListItemIcon, Box, keyframes } from "@mui/material";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext";
import { PRICING_CARDS } from "../../textConstant/textconstants";
import { HOME_PAGE_PRICING_SECTION_DESCRIPTION,HOME_PAGE_PRICING_SECTION_HEADING,HOME_PAGE_PRICING_SECTION_ANIMATED_BUTTON } from "../../textConstant/textconstants";
const pricingData = [
  {
      title: PRICING_CARDS.ALL_COURSES.title,
      price: PRICING_CARDS.ALL_COURSES.price,
      duration: PRICING_CARDS.ALL_COURSES.duration,
      subscription: PRICING_CARDS.ALL_COURSES.subscription,
      head: PRICING_CARDS.ALL_COURSES.head,
      description: PRICING_CARDS.ALL_COURSES.description,
      features: PRICING_CARDS.ALL_COURSES.features,
      buttonText: PRICING_CARDS.ALL_COURSES.buttonText,
  },
  {
    title:PRICING_CARDS.ONE_YEAR.title,
    oldPrice:PRICING_CARDS.ONE_YEAR.oldPrice,
    price: PRICING_CARDS.ONE_YEAR.price,
    duration:PRICING_CARDS.ONE_YEAR.duration,
    head:PRICING_CARDS.ONE_YEAR.head,
    subscription:PRICING_CARDS.ONE_YEAR.subscription,
    features:PRICING_CARDS.ONE_YEAR.features,
    buttonText: PRICING_CARDS.ONE_YEAR.buttonText,
  },
];
const fadeAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
`;
const Pricing = () => {
    const theme = useTheme();
    const { themeMode } = useContext(ThemeContext); 
  return (
    <Container sx={{ textAlign: "center", py: 5, mt: 22, "@media (max-width: 900px)": { mt: 1, px: 0 } }}>
   <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 , 
    WebkitMaskImage: themeMode === "dark" 
    ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
    : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
  maskImage: themeMode === "dark" 
    ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
    : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
      }}>
      {HOME_PAGE_PRICING_SECTION_HEADING}
      </Typography>
      <Typography color='primary.description' sx={{fontWeight:"600", textAlign: "center", maxWidth: "550px", margin: "0 auto", fontSize: "18px", lineHeight: "1.4" }}>
{HOME_PAGE_PRICING_SECTION_DESCRIPTION}      </Typography>
      <Box sx={{ animation: `${fadeAnimation} 2s infinite ease-in-out`,
       backgroundColor: "hsla(53, 98%, 77%, .8)", maxWidth: "70%",
       "@media (max-width: 900px)": { maxWidth: "95%",p:0.5,fontSize:"12px",borderRadius:"10px" }, margin: "0 auto", py: 1, borderRadius: "8px", mt: 3 }}>
        <Typography sx={{ color: "rgba(133,77,14,1)" }}>
          {HOME_PAGE_PRICING_SECTION_ANIMATED_BUTTON}
          </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center" sx={{ 
  mt: 3, 
  maxWidth: "750px", 
  margin: "0 auto", 
  overflow: "hidden", 
  px: 2,
  "@media (max-width: 900px)": { maxWidth:"100%",p:0,margin:"10 auto"} 
}}>
  {pricingData.map((plan, index) => (
    <Grid item xs={12} sm={6} key={index} sx={{ 
      display: "flex", 
      justifyContent: "center", 
      "@media (max-width: 786px)": { width: "100%", display: "flex", justifyContent: "center" } 
    }}>
    <Card sx={{ 
        // backgroundColor: "#f2f2f2",
    //  backgroundColor: "background.navbar",
    backgroundColor: themeMode === "dark" 
    ? "background.navbar" 
    : "#f2f2f2", 
        marginTop: index === 0 ? "50px" : "40px", 
        overflow: "visible", 
        position: "relative", 
        py: 1, 
        pb: 3, 
        boxShadow: "none", 
        border: "1px solid rgba(218, 235, 238, 0.09)", 
        width: "100%", 
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
            border: "1px solid  #0284C7",
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
              pl: 3, 
              fontSize: "36px", 
              fontWeight: "800", 
              mr: 1 
            }}>
              {plan.oldPrice}
            </Typography>
          )}
          {plan.price}
          <Typography component="span" color='primary.description' sx={{fontWeight:"600", fontSize: "18px", ml: 0.5 }}>{plan.duration}</Typography>
          <Typography component="span" color='primary.description' sx={{fontWeight:"600", fontSize: "19px", ml: 0.5, display: "block", mt: 0.6 }}>{plan.subscription}</Typography>
          <Typography component="span" color='primary.cards' sx={{ fontSize: "14px", pt: 1, pb: 2, ml: 0.5, width: "240px", margin: "0 auto", display: "block", textAlign: "center" }}>{plan.head}</Typography>
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
          transition: "color 0.3s ease", 
          // color: "#1E293B", 
          color:"white",
          fontSize: "14px", 
          backgroundColor:"primary.hero",
          "&:hover": { boxShadow: "none",color:"white" } 
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