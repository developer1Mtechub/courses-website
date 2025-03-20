// import Navbar from "../home/navbar"
import HeaderCopy from "../home/headercopy"
import HeroSection from "./heroSection"
import Footer from "../home/footer"

const About=()=>{
    return(
        <>
      <div className="home-container">
        <HeaderCopy/>
               {/* <Navbar/> */}
               <div className="content-container">
       
          <HeroSection/>
          <Footer/>

             </div></div>
        </>
    )
}
export default About