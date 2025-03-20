
import React, { useState , useRef,useEffect} from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Popper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Button from "@mui/material/Button";
import CustomIcon from "../../assets/customicon";
import CoursesModal from "./coursesModal";
import MoreModal from "./moremodal";
import BottomDrawer from "./bottomDrawer" 
import { AppStore } from "../../assets/icons";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext"
import {useNavigate} from "react-router-dom"
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isCoursesOpen = Boolean(anchorEl);
  const [moreAnchorEl, setMoreAnchorEl] = useState(null);
  const isMoreOpen = Boolean(moreAnchorEl);
  const handleMouseEnter = (event) => setAnchorEl(event.currentTarget);
  const handleMouseLeave = () => setAnchorEl(null);
  const handleMoreEnter = (event) => setMoreAnchorEl(event.currentTarget);
  const handleMoreLeave = () => setMoreAnchorEl(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => setIsDrawerOpen(open);
  const theme = useTheme(); // Get the theme colors
  const { themeMode } = useContext(ThemeContext); 
  const navigate=useNavigate("")
  const handleResources=()=>{
    navigate("/resources")
  }
  const handleProjects=()=>{
    navigate("/projects")
  }
  const handleCodeWithBeto=()=>{
    navigate("/")
  }
  const navbarRef = useRef(null);

  useEffect(() => {
    const checkSticky = () => {
      if (navbarRef.current) {
        const rect = navbarRef.current.getBoundingClientRect();
        console.log("Navbar position from top:", rect.top);
      }
    };

    window.addEventListener("scroll", checkSticky);
    return () => window.removeEventListener("scroll", checkSticky);
  }, []);


  return (
 
<Box
  position="sticky"
  ref={navbarRef}
  sx={{
    zIndex: 999,
    position: "sticky",
    top: 0,
    boxShadow: "none",
    py: { xl: 0.1 },
    borderBottom: `1px solid ${
      themeMode === "dark" ? "rgba(211, 211, 211, 0.1)" : "rgba(211, 211, 211, 0.04)"
    }`,
   backgroundColor: themeMode === "dark" ? " #020617 !important " : "rgba(232, 233, 255, 0.42) !important", 
  }}
  className="navbar"
>

                 <Box sx={{ display: "flex", justifyContent: "center",width:"100%",   
}}>
                 <Box sx={{ width: "100%", maxWidth: "1150px",

                  }}>
      <Toolbar className="toolbar">
        <Box className="menu-icon">
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon color="primary"/>
          </IconButton>
        </Box>
        <Box className="desktop-nav" sx={{gap:2}}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0 ,mr:3,}} onClick={handleCodeWithBeto}>
        <IconButton edge="start">
      <CustomIcon color={themeMode === "dark" ? "white" : "black"} />
    </IconButton>
            <Typography variant="h6" color="primary" sx={{ fontWeight: "700", cursor: "pointer" }} >
              Code with Beto
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 0.5, cursor: "pointer" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Typography variant="body1" color={themeMode === "dark" ? "primary.links" : "primary.description"}   sx={{ 
    fontSize: "15px", 
    cursor: "pointer",
    transition: "color 0.2s ease-in-out",
    "&:hover": {
      color: themeMode === "dark" ? "inherit" : "black", 
      opacity: themeMode === "dark" ? 0.8 : 1,  
    } 
  }}>Courses</Typography>
              {isCoursesOpen ? (
                <KeyboardArrowUpIcon sx={{ fontSize: "16px" }} color="primary" />
              ) : (
                <KeyboardArrowDownIcon sx={{ fontSize: "16px" }} color="primary" />
              )}
              <Popper open={isCoursesOpen} anchorEl={anchorEl} placement="bottom-start" disablePortal>
                <CoursesModal />
              </Popper>
            </Box>
            <Typography variant="body1" color={themeMode === "dark" ? "primary.links" : "primary.description"}   sx={{  fontSize: "15px",  cursor: "pointer",
               transition: "color 0.2s ease-in-out",     "&:hover": {
                color: themeMode === "dark" ? "inherit" : "black",  // Black on hover in light mode
                opacity: themeMode === "dark" ? 0.8 : 1,  // Opacity change only in dark mode
              }  }} onClick={handleResources}>Resources</Typography>
            <Typography variant="body1"  color={themeMode === "dark" ? "primary.links" : "primary.description"}    sx={{  fontSize: "15px",  cursor: "pointer",
               transition: "color 0.2s ease-in-out",    "&:hover": {
                color: themeMode === "dark" ? "inherit" : "black",  // Black on hover in light mode
                opacity: themeMode === "dark" ? 0.8 : 1,  // Opacity change only in dark mode
              }   }} onClick={handleProjects}>Projects</Typography>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 0.5, cursor: "pointer" }}
              onMouseEnter={handleMoreEnter}
              onMouseLeave={handleMoreLeave}
            >
              <Typography variant="body1"  color={themeMode === "dark" ? "primary.links" : "primary.description"}   sx={{  fontSize: "15px",  cursor: "pointer",
                 transition: "color 0.2s ease-in-out",    "&:hover": {
                  color: themeMode === "dark" ? "inherit" : "black",  // Black on hover in light mode
                  opacity: themeMode === "dark" ? 0.8 : 1,  // Opacity change only in dark mode
                } }}>More</Typography>
              {isMoreOpen ? (
                <KeyboardArrowUpIcon sx={{ fontSize: "16px" }} color="primary" />
              ) : (
                <KeyboardArrowDownIcon sx={{ fontSize: "16px" }} color="primary" />
              )}
              <Popper open={isMoreOpen} anchorEl={moreAnchorEl} placement="bottom" disablePortal>
                <MoreModal />
              </Popper>
            </Box>
          </Box>
        </Box>
        <Box className="right-section" sx={{gap:3}}>

    <Box 
  className="search_box"
  sx={{
    py: {xl:0.3,lg:0.1 },
    px:{xl:2,lg:1,},
    // backgroundColor: themeMode === "dark" ? "#0f172a" : "#ffffffa1", // ✅ Default background
    border: "1px solid rgba(146, 161, 182, 0.15)",
    transition: "all 0.3s ease-in-out", // ✅ Smooth transition
    "&:hover": {
      backgroundColor: themeMode === "dark" ? "#0f172a" : "white", // ✅ Hover effect
      border: "none",
   
    },
  }}
>
            <IconButton  className="search-icon">
             <SearchIcon  color='primary.search' sx={{ color:"#92a1b6",marginRight: "4px", fontSize: "16px" }} />
            </IconButton>
            <Typography sx={{fontSize:"14px",marginRight:"3px"}} color="primary.search" className='search_text'>
              Search resources
            </Typography>
            <Typography variant="body1" color="primary.search" className="mac_icon">
              ⌘
            </Typography>
            <Typography variant="body1" color="primary.search" className="k_icon" sx={{ fontSize: "13px" }}>
              K
            </Typography>
          </Box>
      <Button
  variant="contained"
  backgroundColor='primary.main'
  sx={{
    borderRadius: "6px",
    padding: "6px 20px",
    // color: "#2a3243",
    color: themeMode === "dark" ? "#2a3243" : "white",
    textTransform: "none",
    boxShadow:"none",
    fontSize: "14px",
    fontWeight: 500,
    "&:hover": {
    boxShadow:"none",
  backgroundColor:"background.modal",
   color:"primary.main",
   backgroundColor: themeMode === "dark" ? "#0f172a" : "#0f172a", // ✅ Hover effect
   color: themeMode === "dark" ? "white" : "white",
  opacity: themeMode === "dark" ? "1" : "0.8",
   border: "none",
    },
  }}
>
  Sign In
</Button>
        </Box>
      </Toolbar>
      <BottomDrawer open={isDrawerOpen} onClose={toggleDrawer(false)} />
      </Box>
      </Box>
    </Box>

  );
};

export default Navbar;

