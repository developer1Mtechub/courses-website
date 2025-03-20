
import { Button, Typography } from "@mui/material";
import Navbar from "./navbar";
import HeroSection from "./heroSection";
import CourseSection from "./courseSection";
import VideoSection from "./videoSection";
import MainSection from "./mainSection";
import Pricing from "./pricing";
import FAQsSection from "./FAQsSection";
import Footer from "./footer";
import HeaderCopy from "./headercopy";
const Home=()=>{
    return(
        <> 
       <div className="home-container">
       {/* <Navbar/>   */}
       <HeaderCopy/>
       <div className="content-container">

        </div>
        <div className="hero-section"> 
        <HeroSection/>
        </div>
        <div className="content-container">
      <CourseSection/>
        <VideoSection/>
        <MainSection/>
        <Pricing/>
        <FAQsSection/>
        <Footer/>
        </div>
        </div>
        </>
    )
}
export default Home