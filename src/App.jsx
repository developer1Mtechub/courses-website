
import { useState } from 'react'
import './App.css'
import Home from './pages/home/home'
import TypeScript from './pages/typeScript/typeScript';
import MasterGit from './pages/masterGit/masterGit';
import ScrollToTop from './componenets/scrollToTop';
import Blog from "./pages/blog/blog";
import About from './pages/about/about';
import Projects from './pages/projects/projects';
import Resources from './pages/resources/resources';
import CodeWithBeto from './pages/codeWithBeto/codeWithBeto';
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
import "@fontsource/inter"; 
import "@fontsource/inter/400.css"; 
import "@fontsource/inter/500.css"; 
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css"; 
import "@fontsource/inter/900.css"; 
import "@fontsource/inter/400-italic.css";
import "@fontsource/inter/500-italic.css"; 
import { ThemeProvider } from "@mui/material/styles";
import ThemeContextProvider from "./theme/themeContext"; 
import CssBaseline from "@mui/material/CssBaseline";
function App() {
  return (
    <>

 <ThemeContextProvider> 
      <CssBaseline />
      <BrowserRouter>
      <ScrollToTop/>
      <div className="app_container">
        <Routes>
        {/* <Route path="/" element={<CodeWithBeto />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/learnReact" element={<TypeScript />} />
          <Route path="/learnGit" element={<MasterGit/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/resources" element={<Resources/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
        </div>
      </BrowserRouter>
    </ThemeContextProvider>

    </>
  )
}
export default App

