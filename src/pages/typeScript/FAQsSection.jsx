
import React, { useState } from "react";
import { Box, Typography, Container, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext";
import { TYPESCRIPT_FAQS_DESCRIPTION,TYPESCRIPT_FAQS_HEADING,faqs ,FAQS_BOTTOM_CONTACT,FAQS_BOTTOM_QUESTION} from "../../textConstant/textconstants";


const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    const theme = useTheme(); // Get the theme colors
      const { themeMode } = useContext(ThemeContext); 
  return (
    <Container sx={{ mt: 5 ,pb:2,"@media (max-width: 900px)": {
            // width:"100%",
         mt:2,
            // height:"130vh"
          }}}>
     <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 ,textAlign:"left", 
      //  WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
      //    maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)",
      WebkitMaskImage: themeMode === "dark" 
      ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
      : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
    maskImage: themeMode === "dark" 
      ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
      : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
         }}>
       {TYPESCRIPT_FAQS_HEADING}
         </Typography>
         <Typography color="primary.description" sx={{fontWeight:"500",  margin:"0 auto",fontSize: "16px",textAlign:"left", lineHeight: "1.3" }}>
{TYPESCRIPT_FAQS_DESCRIPTION}       
  </Typography>
      <Box sx={{mt:4,}}>
        {faqs.map((faq, index) => (
          <Box
            key={index}
            sx={{
                width:"100%",
              // borderBottom: "1px solid rgba(226, 232, 240, 0.14)",
            borderBottom: themeMode === "dark" 
              ? "1px solid rgba(226, 232, 240, 0.14)"  // ✅ Dark Mode Background
              : "1px solid rgba(226, 232, 240, 0.73)",
              py: 1.5,
              cursor: "pointer",

          
            }}
            onClick={() => toggleFAQ(index)}
          >
            {/* Question & Expand Icon */}
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", }}>
              <Typography variant="body1" sx={{ fontWeight: "500",fontSize:"17px", flex: 1 ,  transition: "text-decoration 0.3s ease",
    "&:hover": {
      textDecoration: "underline",
    },
    "@media (max-width: 900px)": {
            // width:"100%",
           fontSize:"15px"
            // height:"130vh"
          }}}>
                {faq.question}
              </Typography>
              <IconButton>
                <ExpandMoreIcon
                  sx={{
                    transition: "transform 0.3s ease",
                    transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                   color: themeMode === "dark" 
                    ? "white"  // ✅ Dark Mode Background
                    : "black",
                  }}
                />
              </IconButton>
            </Box>

            {/* Answer BELOW the question (Properly Positioned) */}
            <Collapse in={openIndex === index} timeout="auto">
              <Typography
                variant="body1"
                // color='primary.description'
                sx={{
                   color:"#8592a4",
                  mt: 1,
                  pl: 0,
                  
                  transition: "opacity 0.3s ease-in-out",
                }}
              >
                {faq.answer}
              </Typography>
            </Collapse>
          </Box>
          
        ))}
     <Box  sx={{ display:"flex",flexDirection:"row",mt:2,gap:1,pb:2,
  }}>
            <Typography  variant="body1" sx={{fontWeight: "500",fontSize:"17px",}}>{FAQS_BOTTOM_QUESTION}</Typography> 
             <span style={{color:"#41b8ee" ,textDecoration:"none"}}>{FAQS_BOTTOM_CONTACT}</span>
              </Box>
      </Box>
    </Container>
  );
};

export default FAQsSection;