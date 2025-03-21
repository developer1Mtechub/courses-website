
import React, { useState , useRef,useEffect} from "react";
import { AppBar, Toolbar, Typography, IconButton, Box, Popper } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import BottomDrawer from "./bottomDrawer" 
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext"
import {useNavigate} from "react-router-dom";
import logos from "../../assets/logos.png";
import CustomButton from "../../componenets/customButton";
const HeaderCopy = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isCoursesOpen = Boolean(anchorEl);
  const [moreAnchorEl, setMoreAnchorEl] = useState(null);
  const isMoreOpen = Boolean(moreAnchorEl);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = (open) => () => setIsDrawerOpen(open);
  const theme = useTheme(); 
  const { themeMode } = useContext(ThemeContext); 
  const navigate=useNavigate("")
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
  sx={{ zIndex: 999, position: "sticky", top: 0, boxShadow: "none",py: { xl: 0.1 },borderBottom: `1px solid ${
      themeMode === "dark" ? "rgba(211, 211, 211, 0.17)" : "rgba(211, 211, 211, 0.04)"
    }`,
   backgroundColor: themeMode === "dark" ? " #020617 !important " : "white !important", 
  }}
  className="navbar"
>
 <Box sx={{ display: "flex", justifyContent: "center",width:"100%",   
}}>
   <Box sx={{ width: "100%", maxWidth: "1150px", }}>
      <Toolbar className="toolbar">
        <Box className="menu-icon">
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)} sx={{
          }}>
            <MenuIcon color="primary"  />
          </IconButton>
        </Box>
        <Box className="desktop-nav" sx={{gap:2}}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0 ,mr:3,}} onClick={handleCodeWithBeto}>
      <img src={logos} className="logo"/>
          </Box>
        </Box>
        <Box className="right-section" sx={{gap:3}}>
    <CustomButton themeMode={themeMode} >
      Sign In
    </CustomButton>
        </Box>
      </Toolbar>
      <BottomDrawer open={isDrawerOpen} onClose={toggleDrawer(false)} />
      </Box>
      </Box>
    </Box>
  );
};

export default HeaderCopy;