// import Navbar from "../home/navbar"
import HeaderCopy from "../home/headercopy"
import HeroSection from "./heroSection"
import ResourcesCards from "./resourcesCards"
import Footer from "../home/footer"
const Resources=()=>{
    return(
        <>
         <div className="home-container">
         {/* <Navbar/> */}
         <HeaderCopy/>
         <div className="content-container">
        <HeroSection/>
        <ResourcesCards/>
        <Footer/>
        </div>
        </div>
        </>
    )
}
export default Resources