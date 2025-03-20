
import React, { useState } from "react";
import { Box, Typography, Grid, Collapse } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ThemeContext } from "../../theme/themeContext"
import { 
Git1,Git2,Git3,Git4,Git5,Git6
 
} from "../../assets/icons";

const courses = [
    { 
        id: 1, 
        title: "Getting Started", 
        icon: <Git1 />, 
        description: (
          <>
Dive into the basics of Git and GitHub. This section provides a solid foundation by explaining what Git and GitHub are and their difference, learn how to start pushing code to GitHub and importance of GitHub in the professional habitat   
    <ul style={{ paddingLeft: "20px",marginTop:"20px",fontSize:"16px" }}>
  <li className='course_type_list'  style={{ marginBottom: "5px" }}>
    <span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px",}} >Introduction to Git</span>
     <span style={{ float: "right" }}>10 min</span></li>
         
             <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ fontWeight:"400", float:"left",paddingLeft:"5px" }}>Git vs. GitHub and Alternatives</i> <span style={{ float: "right" }}>7 min</span></li>
              <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>Installing Git</i> <span style={{ float: "right" }}>3 min</span></li>
              <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ fontWeight:"400", float:"left",paddingLeft:"5px" }}>
              Initial Git Configuration</i> <span style={{ float: "right" }}>6 min</span></li>
              <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>Creating Your First Repository</i> <span style={{ float: "right" }}>16 min</span></li>

            </ul>
          </>
        )
      },  { id: 2, title: "Git Fundamentals", icon: <Git2/>, 
        description:(<>
Master the essential Git commands and concepts. Learn how to clone a remote repository, track changes, commit, and undo changes. Understand how to ignore files from Git and explore Git basics      <ul style={{ paddingLeft: "20px",marginTop:"20px" ,fontSize:"16px"}}>
            <li  className='course_type_list'  style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} >
            Basic Git Commands</span> <span style={{ float: "right" }}>15 min</span></li>
             <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>Cloning a Remote Repository</i> <span style={{ float: "right" }}>4 min</span></li>
              <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>Tracking Changes in Git</i> <span style={{ float: "right" }}>8 min</span></li>
              <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>Ignoring files from Git</i> <span style={{ float: "right" }}>6 min</span></li>

            </ul>
        </>) },
  { id: 3, title: "Branching", icon: <Git3 />,
    description:(<>
Learn how to manage branches effectively. Understand branching workflows, merging, and rebasing. Explore how to manage remote branches and master rebasing  <ul style={{ paddingLeft: "20px",marginTop:"20px",fontSize:"16px" }}>
              <li  className='course_type_list'  style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} >Introduction to Branching</span> <span style={{ float: "right" }}>11 min</span></li>
               <li  className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>Merging and Managing Branches</i> <span style={{ float: "right" }}>9 min</span></li>
                <li className='course_type_list'   style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> 
                Effective Branch Management</i> <span style={{ float: "right" }}>5 min</span></li>
                <li className='course_type_list'   style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Exploring Branching Workflows</i> <span style={{ float: "right" }}>4 min</span></li>
                <li  className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>
                Managing Remote Branches</i> <span style={{ float: "right" }}>4 min</span></li>
                <li  className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Mastering Rebasing</i> <span style={{ float: "right" }}>6 min</span></li>
              </ul>
          </>)
    },
  { id: 4, title: "Contributing to Large Codebases", icon: <Git4 />, 
    description:(<>
Learn how to contribute to large codebases effectively. Understand how to create a pull request, add reviewers and descriptions, deal with merge conflicts, and create an issue. Explore code review best practices          <ul style={{ paddingLeft: "20px",marginTop:"20px" ,fontSize:"16px"}}>
                      <li className='course_type_list'  style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} > Creating a Pull Request</span> <span style={{ float: "right" }}>16 min</span></li>
                       <li className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>  Dealing with Merge Conflicts</i> <span style={{ float: "right" }}>9 min</span></li>
                        <li  className='course_type_list' style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Creating an Issue</i> <span style={{ float: "right" }}>4 min </span></li>
                        <li  className='course_type_list' style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>
                        Code review</i> <span style={{ float: "right" }}>4 min </span></li>
                   
                      </ul>
                  </>)
 },
  { id: 5, title: "Git in Visual Studio Code", icon: <Git5 />,
    description:(<>
Master Git operations in Visual Studio Code. Learn how to perform essential Git operations, resolve conflicts, analyze changes, and explore alternatives       <ul style={{ paddingLeft: "20px",marginTop:"20px",fontSize:"16px" }}>
   <li  className='course_type_list' style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} >Essential Git Operations in VS Code</span> <span style={{ float: "right" }}>7 min</span></li>
    <li  className='course_type_list'  style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}>Analyzing Changes with Git Diff</i> <span style={{ float: "right" }}>3 min</span></li>
                      </ul>
                          </>)
    },
  { id: 6, title: "Best Practices", icon: <Git6 />,
    description:(<>
Learn best practices for Git and GitHub. Understand how to name branches effectively, commit like a pro, and use the feature branch strategy   <ul style={{ paddingLeft: "20px",marginTop:"20px",fontSize:"16px" }}>
       <li  className='course_type_list' style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} > Naming Branches Effectively</span> <span style={{ float: "right" }}>5 min</span></li>
        <li  className='course_type_list' style={{ marginBottom: "5px" }}><i style={{ float:"left",paddingLeft:"5px" }}> Committing Like a Pro</i> <span style={{ float: "right" }}>5 min</span></li>
        <li  className='course_type_list' style={{ marginBottom: "5px" }}><span style={{ fontStyle: "italic",float:"left",paddingLeft:"5px"}} > The Feature Branch Strategy</span> <span style={{ float: "right" }}>3 min</span></li>
                          </ul>
                              </>)
    },
];

function CourseSection() {
  const [expandedIds, setExpandedIds] = useState([]);

  const handleToggle = (id) => {
    setExpandedIds((prevExpandedIds) =>
      prevExpandedIds.includes(id)
        ? prevExpandedIds.filter((expandedId) => expandedId !== id)
        : [...prevExpandedIds, id]
    );
  };
    const theme = useTheme(); // Get the theme colors
    const { themeMode } = useContext(ThemeContext); 
  return (
    <Box
      sx={{
        mt: 3,
 
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "center",
        textAlign: "start",
        padding: 2,
        "@media (max-width: 900px)": {
          mt:0,
         },
      }}
      
    >
        <Box sx={{width:"87%",
              px:{lg:0,xl:14}
        }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", mb: 1 , 
      WebkitMaskImage: themeMode === "dark" 
      ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
      : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
    maskImage: themeMode === "dark" 
      ? "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 70%)" 
      : "linear-gradient(to top, rgba(0, 0, 0, 0) 0%, black 30%)",
      }}>
        Course Sections
      </Typography>
      <Typography color="primary.description" sx={{fontWeight:"400", pt:2,fontSize: "16px", lineHeight: "1.4" }}>
      This course starts with the basics of Git and GitHub, progressively advancing to more sophisticated techniques and strategies.      </Typography>
      </Box>

      <Grid container spacing={3} sx={{  width: "100%",
    maxWidth: { xs: "100%", sm: "100%", md: "100%",xl:"85%" },  mt: 3,px:10,   "@media (max-width: 900px)": {
        px:0,
    
        // height:"130vh"
      }, }}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={6} key={course.id}>
            <Box
              onClick={() => handleToggle(course.id)}
              sx={{
                
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
                borderRadius: 2,
                
                // bgcolor: "rgba(211, 211, 211, 0.24)",
              //  backgroundColor:"background.default",
          //  backgroundColor:"#FFFFFF0D",
          backgroundColor: themeMode === "dark" 
          ? "#FFFFFF0D"  // ✅ Dark Mode Background
          : "rgba(211, 211, 211, 0.24)",
                // opacity:0.6,
                border: "1px solid rgba(211, 211, 211, 0.14)",
                transition: "background-color 0.2s ease-in-out",
                cursor: "pointer",
                "&:hover": {
                  //  bgcolor: "rgba(211, 211, 211, 0.5)" 
                  backgroundColor: "rgba(143, 154, 207, 0.2)" ,

                  // opacity:0.8

                },
                "@media (max-width: 900px)": {
        px:1,
    
        // height:"130vh"
      }
              }}
            >
            
              <Box sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  {course.icon}

                  <Typography variant="subtitle1" color="primary.main" fontWeight={500} 
                   sx={{
                    transition: "text-decoration 0.3s ease-in-out",
                    "&:hover": {
                      textDecoration: "underline"
                    }
                  }}>
                    {course.title}
                  </Typography>
                </Box>
                {expandedIds.includes(course.id) ? (
                  <KeyboardArrowUp color='primary.main' />
                ) : (
                  <KeyboardArrowDown color='primary.main' />
                )}
              </Box>
              <Collapse in={expandedIds.includes(course.id)} timeout={{ enter: 500, exit: 500 }} sx={{ display: "flex", flexDirection: "column",minHeight: "80px"}}>
                <Typography  color='primary.description' sx={{ mt: 1,fontSize:"16px",fontStyle:"italic" ,textAlign:"left" ,pl:1}}>
                  {course.description}
                </Typography>
              </Collapse>
        
        
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CourseSection;