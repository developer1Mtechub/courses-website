import React from "react";
import { Drawer, List, ListItem, ListItemText, IconButton, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomIcon from "../../assets/customicon";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext";
import logos from "../../assets/logos.png"
const BottomDrawer = ({ open, onClose }) => {
    const theme = useTheme(); 
    const { themeMode } = useContext(ThemeContext); 
  const navigate=useNavigate("")
  const handleCourse=()=>{
    navigate("/")
  }
  const handleTypeScript=()=>{
    navigate("/learnReact")
  }
  const handleGithub=()=>{
    navigate("/learnGit")
  }
  const handleResources=()=>{
    navigate("/resources")
  }
  const handleProjects=()=>{
    navigate("/projects")
  }
  const handleBlog=()=>{
    navigate("/blog")
  }
  // const handleAbout=()=>{
  //   navigate("/about")
  // }
  const handleCourses=()=>{
    document.getElementById("courses-section")?.scrollIntoView({ behavior: "smooth" });
   }
   const handleAbout=()=>{
    document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
   }
   const handlePricing=()=>{
    document.getElementById("pricing-section")?.scrollIntoView({ behavior: "smooth" });
   }
   const handleFAQS=()=>{
    document.getElementById("Faqs-section")?.scrollIntoView({ behavior: "smooth" });
   }
  return (
    <Drawer anchor="bottom" open={open} onClose={onClose} >
      <Box sx={{ width: "100%", padding: 1,pr:0,
        backgroundColor:"background.default"
      }}>
        <IconButton onClick={onClose} sx={{ position: "absolute", right: 10, top: 5 }}>
          <CloseIcon />
        </IconButton>
        <Box sx={{ display: "flex",pl:2, alignItems: "center", gap: 0 }}>
          <img src={logos} className="menu_logo" />

          
          </Box>
          <p className='drawer_line'></p>
        <List>
        <Typography  onClick={handleCourses} variant="title1" sx={{fontWeight: "500", marginTop: 3, paddingLeft: 2 ,paddingBottom:2}}>
           Course Detail
          </Typography>
          {/* <ListItem button sx={{ display: "flex",color:"secondary.dark" ,paddingY: 0, minHeight: "unset" , alignItems: "center", gap: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
            <ListItemText primary="React Native Course" sx={{ color: "secondary.dark" }} onClick={handleCourse}/>
          </ListItem> */}
          {/* <ListItem button sx={{ display: "flex", color:"secondary.dark"  ,paddingY: 0, minHeight: "unset",alignItems: "center", gap: 2 }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" 
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
            </svg>
            <ListItemText primary="Master React with TypeScript" sx={{ color: "secondary.dark" }} onClick={handleTypeScript}/>
          </ListItem> */}
          {/* <ListItem button sx={{ display: "flex",color:"secondary.dark"  ,paddingY: 0, minHeight: "unset",alignItems: "center", gap: 2 }}>
<svg sx={{ color: "secondary.dark" }} viewBox="0 0 438.549 438.549" width="18" height="18" ><path fill="currentColor" d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path></svg>
            <ListItemText primary="Master Git & GitHub" sx={{ color: "secondary.dark" }} onClick={handleGithub}/>
          </ListItem> */}
        

          <Typography  onClick={handleAbout} variant="subtitle1" sx={{ fontWeight: "500", marginTop: 2, paddingLeft: 2 ,paddingBottom:2}} >
          About
          </Typography>
          {/* <ListItem button sx={{ display: "flex",color:"secondary.dark" ,paddingY: 0, minHeight: "unset" , alignItems: "center", gap: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path><path d="M2 7h20"></path><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"></path></svg>            <ListItemText primary="Purchase Resources" sx={{ color: "secondary.dark" }} />
          </ListItem>
          <ListItem button sx={{ display: "flex",color:"secondary.dark"  ,paddingY: 0, minHeight: "unset", alignItems: "center", gap: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>     
            <ListItemText primary="Premium Resources" sx={{ color: "secondary.dark" }} />
          </ListItem>
          <ListItem button sx={{ display: "flex",color:"secondary.dark" ,paddingY: 0, minHeight: "unset" , alignItems: "center", gap: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><rect width="7" height="18" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect></svg>            <ListItemText primary="Projects" sx={{ color: "secondary.dark" }} onClick={handleProjects}/>
          </ListItem> */}
        
          <Typography  onClick={handlePricing} variant="subtitle1" sx={{ fontWeight: "500", marginTop: 2, paddingLeft: 2 ,paddingBottom:1,}}>
         Pricing
          </Typography>
          {/* <ListItem button sx={{ display: "flex",color:"secondary.dark" ,paddingY: 0, minHeight: "unset" , alignItems: "center", gap: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>                 <ListItemText primary="Blog" sx={{ color: "secondary.dark" }} onClick={handleBlog}/>
          </ListItem>
          <ListItem button sx={{ display: "flex",color:"secondary.dark" ,paddingY: 0, minHeight: "unset" , alignItems: "center", gap: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>           <ListItemText primary="About" sx={{ color: "secondary.dark" }} onClick={handleAbout}/>
          </ListItem>
          <ListItem button sx={{ display: "flex",color:"secondary.dark" ,paddingY: 0, minHeight: "unset" , alignItems: "center", gap: 2 }}>
          <svg viewBox="0 0 24 24"  width="18" height="18"><path fill="currentColor" d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0a13 13 0 0 0-.617-1.25a.08.08 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.08.08 0 0 0 .084-.028a14 14 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13 13 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10 10 0 0 0 .372-.292a.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .078.01q.181.149.373.292a.077.077 0 0 1-.006.127a12.3 12.3 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028a19.8 19.8 0 0 0 6.002-3.03a.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418"></path></svg>             <ListItemText primary="Discord" sx={{ color: "secondary.dark" }} />
          </ListItem>
          <ListItem button sx={{ display: "flex",color:"secondary.dark" , alignItems: "center", gap: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>             <ListItemText primary="Youtube English" sx={{ color: "secondary.dark" }} />
          </ListItem>
          <ListItem button sx={{ display: "flex",color:"secondary.dark" , paddingY: 0, minHeight: "unset" ,alignItems: "center", gap: 2 }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5 mr-2"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>             <ListItemText primary="Youtube Spanish" sx={{ color: "secondary.dark" }} />
          </ListItem>
          <ListItem button sx={{ display: "flex",color:"secondary.dark",paddingY: 0, minHeight: "unset"  , alignItems: "center", gap: 2 }}>
          <svg viewBox="0 0 61 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18" ><path d="M22.1863 5.38001L26.2953 38.0269C26.5357 39.9369 25.6591 41.8154 24.0409 42.8581L8.72643 52.7265C4.8876 55.2001 0.0132911 51.6608 1.17719 47.2448L12.3827 4.72959C13.7851 -0.59166 21.4991 -0.0798664 22.1863 5.38001ZM38.0322 58.62L33.9231 25.9731C33.6827 24.0631 34.5593 22.1846 36.1775 21.1418L51.492 11.2735C55.3309 8.79987 60.2052 12.3392 59.0413 16.7552L47.8358 59.2704C46.4333 64.5917 38.7194 64.0799 38.0322 58.62Z" fill="currentColor" stroke-width="5"></path></svg>             <ListItemText primary="Eco Studios" sx={{ color: "secondary.dark" }} />
          </ListItem> */}

<Typography onClick={handleFAQS} variant="subtitle1" sx={{ fontWeight: "500", marginTop: 2, paddingLeft: 2 ,paddingBottom:1,}}>
    FAQs
          </Typography>
        </List>
      </Box>
    </Drawer>
  );
};

export default BottomDrawer;
