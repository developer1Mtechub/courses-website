// import Navbar from "../home/navbar"
import HeaderCopy from "../home/headercopy"
import HeroSection from "./heroSection"
import CourseSection from "./courseSection"
import VideoSection from "./videoSection"
import MainSection from "../home/mainSection"
import Pricing from "./pricing"
import FAQsSection from "./FAQsSection"
import Footer from "../home/footer"
const TypeScript=()=>{
    return(
        <>
           <div className="home-container">
           {/* <Navbar/> */}
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
export default TypeScript