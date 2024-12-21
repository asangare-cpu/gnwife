import Footer from "../footer/Footer";
import Nav from "../navigation/Nav";
import Service from "../service/Service";
import Comment from "../comment/Comment";
import welcomeImg from "../../assets/images/painting-4916390_1280.jpg"
import './home.css'
import Special from "../service/Special";
import Achieve from "../service/Achieve";

function Home(){
  return(
    <main className="main-home">
      <header>
        <Nav/>
      </header>
      <section className="main-container">
        <div className="slogan">
          <h1>Make Every writing sounds unique and touches Human sensibility.
          </h1>
          <img src={welcomeImg} alt="Home page"></img>
        </div> 
        <div className="_achieve">
          <p>Writing is a master piece, we can help you in every steps.</p>
          <Achieve/>
        </div>
        <div>
          <p
            style={{fontSize:35, color:"darkgray"}}
          >Do you want an Edit ?</p>
          <div className="service-container">
            <Special service="Personal Writing & Editing"/>
            <Special service="Professional Writing & Editing"/>
            <Special service="Creative Writing & Editing"/>
            <Special service="Special Services"/>
          </div>
        </div>
        <Comment/>
      </section>
      <Footer/>
    </main>
  )
}

export default Home;