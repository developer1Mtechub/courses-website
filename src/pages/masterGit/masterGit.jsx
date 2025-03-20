// import Navbar from "../home/navbar"
import HeaderCopy from "../home/headercopy"
import HeroSection from "./heroSection"
import CourseSection from "./courseSection"
import VideoSection from "./videoSection"
import MainSection from "../home/mainSection"
import Pricing from "./pricing"
import Footer from "../home/footer"
const MasterGit=()=>{
    return(
        <>
            <div className="home-container">
            {/* <Navbar/> */}
            <HeaderCopy/>
            <div className="content-container">

        <HeroSection/>
        <CourseSection/>
        <VideoSection/>
        <MainSection/>
        <Pricing/>
        <Footer/>
        </div>
        </div>
        </>
    )
}
export default MasterGit