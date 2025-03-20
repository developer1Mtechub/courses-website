
import React from "react";
import { Box, Typography, Link } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import project16 from "../../assets/project16.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext"
const HeroSection = () => {
    const theme = useTheme(); // Get the theme colors
    const { themeMode } = useContext(ThemeContext); 
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/blog");
  };

  return (
    <>
      <Box
        sx={{  display: "flex", flexDirection: "row",   gap:14,  alignItems: "flex-start",
        px:{lg: 16,xl:30,md:10,},
         mt: 6,pb:4,
         "@media (max-width: 900px)": {
      flexDirection:"column",
      gap:2,
alignItems:"center"
        },}} >
        <Box
          sx={{ display: "flex",
            alignItems: "center",
            color: "#0ea5e9",
            cursor: "pointer",  }} onClick={handleBack}>
          <ArrowBackIcon sx={{ mr: 1, fontSize: "16px" }} />
          <Typography variant="body2" fontWeight="400" sx={{ fontSize: "15px" }}>
            Back
          </Typography>
        </Box>
        <Box   sx={{  maxWidth: "830px", flexGrow: 1, pt:1 ,
                  "@media (max-width: 900px)": {
                    px:2,
                  },
         }} >
          <Typography variant="body2" color='secondary.dark' sx={{fontSize:"14px"}}>
            Wed Dec 25 2024
          </Typography>

          <Typography  fontWeight="bold"      color={themeMode === "dark" ? "#e5e5e5" : "black"} sx={{fontSize:'30px',margin:"12px 0px",
      
      "@media (max-width: 900px)": {
     fontSize:"20px"
      },
            
            }}>
            Hey 👋 I'm Beto — A Life in Changelog
          </Typography>

    
          <Box sx={{ display: "flex", alignItems: "center", mt: 2, mb: 3, gap: 2 }}>
            <img src={project16} style={{ width: "41px", height: "41px", borderRadius: "50px" }} />
            <Typography fontWeight="400" sx={{cursor:"pointer"}}
              color={themeMode === "dark" ? "#e5e5e5" : "#262626"}
            >Alberto Moedano</Typography>
          </Box>


          <Typography variant="h6" fontWeight="500" sx={{ mb: 1 }}
            color={themeMode === "dark" ? "#e5e5e5" : "#1E293B"}>
            2025
          </Typography>
          <Typography variant="body1" sx={{  mb: 3 ,pt:2,}}
            color={themeMode === "dark" ? "#a1a1a1" : "#334155"}>
            <li> To be determined...</li>
          </Typography>


          <Typography variant="h6" fontWeight="500" sx={{ mb: 2 }}>
            2024
          </Typography>
          <Box component="ul" sx={{ pl: 2, lineHeight: 2.2,fontSize:"16px",
          display:"flex",flexDirection:"column",gap:0,
                    "@media (max-width: 900px)": {
                      lineHeight:1.5,
                      gap:2,
                    },
          }}
            color={themeMode === "dark" ? "#cbd5e1" : "#515d6e"}
         >
            <li>✈️ Visited <span style={{fontWeight:"700"}}>Mexico </span> after <span style={{fontWeight:"700"}}>6 years.</span></li>
            <li>🎉 Started working as a <span style={{fontWeight:"700"}}>Developer Success Engineer</span> at <span style={{fontWeight:"600"}}>Expo</span>.</li>
            <li>🤝 Received and accepted an offer from <span style={{fontWeight:"700"}}>Expo.</span></li>
            <li>⭐ Crossed <span style={{fontWeight:"700"}}>10,000 subscribers</span> on YouTube.</li>
            <li> 🚀 Launched the   <Link   href="#"  color="#0ea5e9" sx={{"&:hover": { color:"#0ea5e9" }}}
          > Git & GitHub course </Link> 
            on <Link sx={{ color: "#0ea5e9" ,  textDecoration: "none",cursor:"pointer", "&:hover": { textDecoration: "underline",color:"#0ea5e9" },}}>Code with Beto</Link>.
</li>
            <li>✈️ Took my wife to <span style={{fontWeight:"700"}}>Tenerife, Spain</span>.</li>
            <li>🤒 Caught COVID for the third time.</li>
        
          </Box>



          <Typography variant="h6" fontWeight="500" sx={{ mb: 3 ,mt:3,}}>
          2023
          </Typography>
          <Box component="ul" sx={{ pl: 2, lineHeight: 2.2,fontSize:"16px", 
            display:"flex",flexDirection:"column",gap:0,
            "@media (max-width: 900px)": {
              gap:2,lineHeight:1.5
            },
          }}
               color={themeMode === "dark" ? "#cbd5e1" : "#515d6e"}>
            <li>🇺🇸 Became a <span style={{fontWeight:"700"}}> U.S. permanent resident</span>.</li>
            <li>🌐 Reached <span style={{fontWeight:"700"}}>10,000 registered users </span>on <Link sx={{ color: "#0ea5e9" ,  textDecoration: "none",cursor:"pointer", "&:hover": { textDecoration: "underline",color: "#0ea5e9"},}}>Code with Beto</Link>.</li>
            <li>🖥️ Launched the <Link href="#" color="#0ea5e9" sx={{"&:hover": { color:"#0ea5e9" }}}> React with TypeScript course</Link></li>
            <li>🏡 Relocated to <span style={{fontWeight:"700"}}>Bentonville, AR</span> (Walmart HQ).</li>
            <li>💼 Started as a <span style={{fontWeight:"700"}}>Software Engineer III</span> at <span style={{fontWeight:"700"}}>Walmart</span>.</li>
            <li>🤝 Accepted an offer from Walmart after applying to over <span style={{fontWeight:"600"}}>100 jobs</span>.</li>
            <li>✍️ Focused on creating content fully in <span style={{fontWeight:"600"}}>English</span>.</li>
            <li>🌍 <Link href="#" color="#0ea5e9" sx={{"&:hover": { color:"#0ea5e9" }}}> Translated my React Native course</Link>  to English.</li>

            <li>🎥 Uploaded several new videos to  <Link sx={{ color: "#0ea5e9" ,  textDecoration: "none",cursor:"pointer", "&:hover": { textDecoration: "underline",color:'#0ea5e9' },}}>YouTube (English) </Link> 
             and             <Link sx={{ color: "#0ea5e9" ,  textDecoration: "none",cursor:"pointer", "&:hover": { textDecoration: "underline",color:'#0ea5e9' },}}>YouTube (Spanish)</Link>
            .</li>        
          </Box>






          <Typography variant="h6" fontWeight="500" sx={{ mb: 3 ,mt:3,}}>
          2022
          </Typography>
          <Box component="ul" sx={{ pl: 2, lineHeight: 2.2,fontSize:"16px",
            display:"flex",flexDirection:"column",gap:0,
            "@media (max-width: 900px)": {
                 gap:2,
                 lineHeight:1.5
            },
           }}
             color={themeMode === "dark" ? "#cbd5e1" : "#515d6e"}>
            <li>✅ Received <span style={{fontWeight:"700"}}>work authorization</span>  in the U.S.</li>
            <li>🤒 Caught COVID for the second time.</li>
            <li>🎥 Published my first YouTube video in <span style={{fontWeight:"700"}}>English</span>.</li>
            <li>🚀 Launched my first <span style={{fontWeight:"700"}}>online course</span>.</li>
            <li>🌐 Built  <Link sx={{ color: "#0ea5e9" ,  textDecoration: "none",cursor:"pointer", "&:hover": { textDecoration: "underline",color:'#0ea5e9' },}}>Code with Beto</Link>.</li>
            <li>🎥 Uploaded over <span style={{fontWeight:"700"}}>80 videos</span> to YouTube.</li>
            <li>💡 Completed my first technical interview with <span style={{fontWeight:"700"}}>Amazon </span>(No offer, but learned a lot!).</li>
            <li>🧠 Solved over <span style={{fontWeight:"700"}}>200 coding problems</span>.</li>
            <li>🌍 Worked remotely as a <span style={{fontWeight:"700"}}>freelancer</span> for international clients.</li>
            <li>💍 <span style={{fontWeight:"700"}}>Proposed </span>and <span style={{fontWeight:"700"}}>got married </span>to my wife.</li>
            <li>🏡 Relocated from <span style={{fontWeight:"700"}}>Chattanooga, TN to Atlanta, GA</span>.</li>
        
          </Box>


          <Typography variant="h6" fontWeight="500" sx={{ mb: 3 ,mt:3,}}>
          2021
          </Typography>
          <Box component="ul" sx={{ pl: 2, lineHeight: 2.2,fontSize:"16px" ,
            display:"flex",flexDirection:"column",gap:0,
            "@media (max-width: 900px)": {
              gap:2,
              lineHeight:1.5
            },
          }}
             color={themeMode === "dark" ? "#cbd5e1" : "#515d6e"}>
            <li>📱 Launched simple apps on the <span style={{fontWeight:"700"}}>App Store</span> using <Link sx={{ color: "#0ea5e9" ,  textDecoration: "none",cursor:"pointer", "&:hover": { textDecoration: "underline",color:'#0ea5e9' },}}>React Native</Link>.</li>
            <li>🎥 Started my <Link sx={{ color: "#0ea5e9" ,  textDecoration: "none",cursor:"pointer", "&:hover": { textDecoration: "underline",color:'#0ea5e9' },}}>YouTube channel in Spanish.</Link>.</li>
            <li>💻 Learned <Link sx={{ color: "#0ea5e9" ,  textDecoration: "none",cursor:"pointer", "&:hover": { textDecoration: "underline",color:'#0ea5e9' },}}>React Native </Link> and <Link sx={{ color: "#0ea5e9" ,  textDecoration: "none",cursor:"pointer", "&:hover": { textDecoration: "underline" ,color:'#0ea5e9'},}}>Expo</Link>.</li>
            <li>🎮 Released my second mobile game: <Link sx={{ color: "#0ea5e9" ,  textDecoration: "none",cursor:"pointer", "&:hover": { textDecoration: "underline" ,color:'#0ea5e9'},}}>Souls</Link>.</li>
          </Box>



          <Typography variant="h6" fontWeight="500" sx={{ mb: 3 ,mt:3,}}>
          2020
          </Typography>
          <Box component="ul" sx={{ pl: 2, lineHeight: 2.2,fontSize:"16px" , 
            display:"flex",flexDirection:"column",gap:0,
            "@media (max-width: 900px)": {
                gap:2,
                lineHeight:1.5
            },
          }}
             color={themeMode === "dark" ? "#cbd5e1" : "#515d6e"}>
            <li>🤒 Caught COVID for the first time.</li>
            <li>🎮 Launched my first mobile game:  <Link sx={{ color: "#0ea5e9" ,  textDecoration: "none",cursor:"pointer", "&:hover": { textDecoration: "underline",color:'#0ea5e9' },}}>Rockets X</Link>.</li>
            <li>✈️ Visited <span style={{fontWeight:"700"}}>San Francisco</span> for the first time, my favorite city.</li>
            <li>💻 Got my first <span style={{fontWeight:"700"}}>MacBook</span>.</li>
            <li>❤️ Met my <span style={{fontWeight:"700"}}>future wife</span>.</li>
          </Box>


  <Typography variant="h6" fontWeight="500" sx={{ mb: 3 ,mt:3,}}>
          2018
          </Typography>
          <Box component="ul" sx={{ pl: 2, lineHeight: 2.2,fontSize:"16px",
            display:"flex",flexDirection:"column",gap:0,
            "@media (max-width: 900px)": {
          gap:2,
          lineHeight:1.5
            },
           }}
             color={themeMode === "dark" ? "#cbd5e1" : "#515d6e"}>
            <li>🇺🇸 Moved to the <span style={{fontWeight:"700"}}>U.S</span>., starting a new chapter in life.</li>
          </Box>



  <Typography variant="h6" fontWeight="500" sx={{ mb: 3 ,mt:3,}}>
          2017
          </Typography>
          <Box component="ul" sx={{ pl: 2, lineHeight: 2.2,fontSize:"16px",
            display:"flex",flexDirection:"column",gap:0,
            "@media (max-width: 900px)": {
                gap:2,
                lineHeight:1.5
            },
           }}
             color={themeMode === "dark" ? "#cbd5e1" : "#515d6e"}>
            <li>🎓 Graduated with a <span style={{fontWeight:"700"}}>Bachelor's degree in Computer Science </span>.</li>
          </Box>

  <Typography variant="h6" fontWeight="500" sx={{ mb: 3 ,mt:3,}}>
          2015
          </Typography>
          <Box component="ul" sx={{ pl: 2, lineHeight: 2.2,fontSize:"16px",
            display:"flex",flexDirection:"column",gap:0,
            "@media (max-width: 900px)": {
              gap:2,
              lineHeight:1.5
            },
           }}
             color={themeMode === "dark" ? "#cbd5e1" : "#515d6e"}>
            <li>🛂 Got my <span style={{fontWeight:"700"}}> U.S. tourist visa </span>approved to visit my sister.</li>
          </Box>

  <Typography variant="h6" fontWeight="500" sx={{ mb: 3 ,mt:3,}}>
   2009
          </Typography>
          <Box component="ul" sx={{ pl: 2,lineHeight: 2.2,fontSize:"16px" ,
            display:"flex",flexDirection:"column",gap:0,
            "@media (max-width: 900px)": {
            gap:2,
            lineHeight:1.5
            },
          }}
             color={themeMode === "dark" ? "#cbd5e1" : "#515d6e"}>
            <li>🎶 Got my first <span style={{fontWeight:"700"}}>Apple product</span>: an iPod Touch (2nd generation).</li>
          </Box>


  <Typography variant="h6" fontWeight="500" sx={{ mb: 3 ,mt:3,}}>
1994
          </Typography>
          <Box component="ul" sx={{ pl: 2,  lineHeight: 2.2,fontSize:"16px",display:"flex",flexDirection:"column",gap:0,
                 "@media (max-width: 900px)": {
                 gap:2,
                 lineHeight:1.5
                },
          }}
             color={themeMode === "dark" ? "#cbd5e1" : "#515d6e"}>
            <li>🌍 Born in <span style={{fontWeight:"700"}}>Mexico City</span>, 🇲🇽 — the beginning of the journey.</li>
          </Box>

        </Box>
      </Box>
    </>
  );
};

export default HeroSection;

