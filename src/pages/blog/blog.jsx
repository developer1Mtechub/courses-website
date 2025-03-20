// import Navbar from "../home/navbar"
import HeaderCopy from "../home/headercopy"
import MainSection from "./mainSection"
import Footer from "../home/footer"
const Blog=()=>{
    return(
        <>
          <div className="home-container">
          {/* <Navbar/> */}
          <HeaderCopy/>
          <div className="content-container">
  
        <MainSection/>
        <Footer/>
        </div></div>
        </>
    )
}
export default Blog