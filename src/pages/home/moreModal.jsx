
import React from "react";
import { Popper, Paper, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const MoreModal = ({ open, anchorEl }) => {
  const navigate = useNavigate();
  const menuItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
        </svg>
      ),
      title: "Blog",
      description: "Get valuable insights and tips on my blog.",
    path: "/blog"
    },
      {
      icon: (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"   marginTop="10px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>),
      title: "About",
      description: "Learn more about me, my work and how I can help you with your project.",
          path: "/about"
    },
        { icon: (<svg xmlns="http://www.w3.org/2000/svg" width="18"   marginTop="10px" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0a13 13 0 0 0-.617-1.25a.08.08 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.08.08 0 0 0 .084-.028a14 14 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13 13 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10 10 0 0 0 .372-.292a.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .078.01q.181.149.373.292a.077.077 0 0 1-.006.127a12.3 12.3 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028a19.8 19.8 0 0 0 6.002-3.03a.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418"></path></svg>), 
      title: "Discord", description: "Join the Discord community to ask questions, share your projects, and grow."
     },
       { icon: (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"  marginTop="10px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>)
       , title: "YouTube English", description: "Subscribe to my YouTube channel dedicated to teaching and sharing my..." 
      },
        { icon: (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"  marginTop="10px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>)
        , title: "YouTube Spanish", description: "Subscribe to my YouTube channel dedicated to teaching and sharing my..."
       },
         { icon: (<svg viewBox="0 0 61 64"   width="18" height="18" marginTop="10px" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M22.1863 5.38001L26.2953 38.0269C26.5357 39.9369 25.6591 41.8154 24.0409 42.8581L8.72643 52.7265C4.8876 55.2001 0.0132911 51.6608 1.17719 47.2448L12.3827 4.72959C13.7851 -0.59166 21.4991 -0.0798664 22.1863 5.38001ZM38.0322 58.62L33.9231 25.9731C33.6827 24.0631 34.5593 22.1846 36.1775 21.1418L51.492 11.2735C55.3309 8.79987 60.2052 12.3392 59.0413 16.7552L47.8358 59.2704C46.4333 64.5917 38.7194 64.0799 38.0322 58.62Z" fill="currentColor" stroke-width="5"></path></svg>)
         , title: "Eco Studios", description: "Get your project off the ground with Eco Studios." },
  
  
  
  ];
  return (
    // <Popper open={open} anchorEl={anchorEl} placement="bottom-start" disablePortal>
      <Box
        component={Paper}
        elevation={0}
        sx={{
          width: 640,
    
          py: 2,
          mt: 1,
          backgroundColor:"background.modal",
          borderRadius: 1,
          px: 3,
          border: "1px solid rgba(211, 211, 211, 0.21)", // Light gray border
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
         
        
        
        }}
      
        open={open}
        anchorEl={anchorEl}
      >
     <Box display="grid" gridTemplateColumns="1fr 1fr" gap={1}>
          {menuItems.map((item, index) => (
  <Box key={index} mb={2} className="modal_box" sx={{ boxShadow: "none" }}  
   onClick={() => navigate(item.path)}>
    <Box display="flex" alignItems="center" gap={1.5}>
      <Box sx={{ display: "flex", alignItems: "center" }}>{item.icon}</Box>
      <Typography variant="subtitle1" fontWeight="600" color="primary.main">
        {item.title}
      </Typography>
    </Box>
    <Typography variant="body2" color="secondary.dark">
      {item.description}
    </Typography>
  </Box>
))}


        </Box>
      </Box>
    // </Popper>
  );
};

export default MoreModal;

