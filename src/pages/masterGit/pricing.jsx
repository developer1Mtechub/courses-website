
import React from "react";
import { Container, Typography, Button, Grid, Card, CardContent, List, ListItem, ListItemIcon, Box, keyframes } from "@mui/material";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext"
const pricingData = [
  {
    title: "ALL COURSES PASS",
    price: "$24.99",
    duration: "/month",
    subscription:"Monthly subscription",
    head:"Full access to all courses",
    features: [
      "Full access to React Native Course",
      "Full access to React with TypeScript Course",
      "Full access to Git & GitHub Course",
      "Access to future courses at no extra cost",
      "Access to all course updates",
      "Priority email support",
      "No commitment",
      "Cancel anytime"
    ],
    buttonText: "Subscribe",
  },
  {
    title: "ONE-YEAR ACCESS",
    oldPrice: "$100",
    price: "$90",
    duration: "/year",
    head:"One-time payment for full year access - No recurring charges",
    subscription:"One-time payment",
    features: [
      "The best React Native Course",
      "Access to 53 high-quality lessons",
      "Crystal-clear video explanations",
      "Comprehensive and up-to-date lessons",
      "Take the course at your own pace",
      "Includes access to source code",
      "Includes access to future updates",
      "Access to our Discord community"
    ],
    buttonText: "Purchase",
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
    <Container sx={{ textAlign: "center", py: 5,pb:5, mt: 20, "@media (max-width: 900px)": { mt: 1, px: 2 } }}>
   <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 , textAlign:"start",
    WebkitMaskImage: themeMode === "dark" 
    ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
    : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
  maskImage: themeMode === "dark" 
    ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
    : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
      }}>
        Premium Quality at an Unbeatable Price!
      </Typography>
      <Typography color='primary.description' sx={{fontWeight:"400", textAlign: "start",  margin: "0 auto", fontSize: "16px", lineHeight: "1.4" }}>
      Our comprehensive <span style={{fontWeight:"700"}}> Master Git & GitHub</span> course is now available! Join developers who are mastering version control and collaborative development.         </Typography>
   
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

    backgroundColor: themeMode === "dark" 
    ? "background.navbar" 
    : "#f2f2f2", 
        marginTop: index === 0 ? "70px" : "40px", 
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
          <Typography component="span" color='primary.description' sx={{fontWeight:"600", fontSize: "19px",  display: "block", mt: 0.6,ml:10, }}>{plan.subscription}</Typography>
          <Typography component="span" color='primary.cards' sx={{ fontSize: "14px", pt: 1, pb: 2, width: "240px", margin: "0 auto", display: "block", textAlign: "center" }}>{plan.head}</Typography>
        </Typography>
        <CardContent sx={{ textAlign: "left", p: 1 }}>
          <List sx={{ p: 0 }}>
            {plan.features.map((feature, idx) => (
              <ListItem key={idx} sx={{ py: 0, px: 1, display: "flex", alignItems: "center", mb: 1.5, gap: 0.5 }}>
                <DoneOutlinedIcon sx={{ color: "#26c661", fontSize: "16px", mr: 1 }} />
                <Typography variant="body2"  sx={{fontSize: "14px",   color: themeMode === "dark" 
    ? "primary.cards" 
    : "#475569",  }} >{feature}</Typography>
         
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