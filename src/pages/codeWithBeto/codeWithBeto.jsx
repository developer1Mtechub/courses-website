// import Navbar from "../home/navbar"
import HeaderCopy from "../home/headercopy";
import HeroSection from "./heroSection"
import SponsorCards from "./sponsoresCards"
import Cards from "./cards";
import HeroCards from "./herocards";
import Footer from "../home/footer";
const CodeWithBeto=()=>{
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
          <SponsorCards/>
          <Cards/>
          <HeroCards/>
          <Footer/>
          </div>
      
         </div>
        </>
    )
}
export default CodeWithBeto