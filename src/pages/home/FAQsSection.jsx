import React, { useState } from "react";
import { Box, Typography, Container, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext";
import { FAQS_SECTION } from "../../textConstant/textconstants";
import { FAQS_BOTTOM_QUESTION,FAQS_BOTTOM_CONTACT } from "../../textConstant/textconstants";
import logos from "../../assets/logos.png"
const faqs = [
  { question: FAQS_SECTION.first.question, 
    answer: FAQS_SECTION.first.answer
   },
  { question:FAQS_SECTION.second.question, 
    answer:FAQS_SECTION.second.answer},

  { question:FAQS_SECTION.third.question,
     answer: FAQS_SECTION.third.answer },

  { question: FAQS_SECTION.forth.question,
     answer:FAQS_SECTION.forth.answer},

  { question:FAQS_SECTION.fifth.question,
     answer: FAQS_SECTION.fifth.answer },
  { question:FAQS_SECTION.sixth.question,
     answer:FAQS_SECTION.sixth.answer
    },
  { question:FAQS_SECTION.seventh.question, 
    answer: FAQS_SECTION.seventh.answer
   },
  { question:FAQS_SECTION.eighth.question,
     answer:FAQS_SECTION.eighth.answer
     },

  { question:FAQS_SECTION.ninth.question,
     answer: FAQS_SECTION.ninth.answer },

  { question:FAQS_SECTION.tenth.question, 
    answer:FAQS_SECTION.tenth.answer },
    ];

const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    const theme = useTheme(); // Get the theme colors
      const { themeMode } = useContext(ThemeContext); 
  return (
    <Container sx={{ mt: 28 ,"@media (max-width: 900px)": {
            // width:"100%",
         mt:2
            // height:"130vh"
          }}}>
     <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 ,textAlign:"center", 
      //  WebkitMaskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
      //    maskImage: "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)",
      WebkitMaskImage: themeMode === "dark" 
      ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
      : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
    maskImage: themeMode === "dark" 
      ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
      : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
         }}>
          Frequently Asked Questions (FAQs)
         </Typography>
         <Typography color="primary.description" sx={{fontWeight:"600", maxWidth: "630px", margin:"0 auto",fontSize: "18px",textAlign:"justify", lineHeight: "1.3"
          ,          "@media (max-width: 900px)": {
        fontWeight:"400"
          }
          }}
          id='Faqs-section'>
         Get answers to your burning questions with our comprehensive FAQ section. From course details to technical queries, we've got you covered
         </Typography>
      <Box sx={{mt:4,}}>
        {faqs.map((faq, index) => (
          <Box
            key={index}
            sx={{
                width:"100%",
                // width: { xl: "100%",sm: "100%",md:"100%" },
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
            fontWeight:"400",
           fontSize:"14px"
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
            <Typography  variant="body1" sx={{fontWeight: "500",fontSize:"17px",
                        "@media (max-width: 900px)": {
                     fontWeight:"300",
                     fontSize:"14px"
                          // height:"130vh"
                        }
            }}>{FAQS_BOTTOM_QUESTION}</Typography> 
             <a href="mailto:info@musama.dev" style={{ color: "#41b8ee", textDecoration: "none" }}>
  {FAQS_BOTTOM_CONTACT}
</a>
              </Box>
      </Box>
    </Container>
  );
};

export default FAQsSection;






