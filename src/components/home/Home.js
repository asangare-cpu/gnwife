import Footer from "../footer/Footer";
import Nav from "../navigation/Nav";
import Service from "../service/Service";
import Comment from "../comment/Comment";

import './home.css'
function Home(){
  return(
    <main>
      <header>
        <Nav/>
      </header>
      <div className="slogan">
        <section></section>
        <aside>
          <h1>At Gnwife Master Edits,  every writing resonates with the depth, authencity
            and emotion that only human touch can bring.
          </h1>
        </aside>
      </div>
      <div className="service-box">
        <h1>Academic writing & editing</h1>
        <div className="service-box-type">
          <Service typeService="Standard" serviceContent={["Quick","Unique","Make sens","clear"]}/> 
          <Service typeService="Medium" serviceContent={["Quick","Unique","Make sens","clear"]}/> 
          <Service typeService="Premium" serviceContent={["Quick","Unique","Make sens","clear"]}/> 
        </div> 
      </div>   
      <div className="service-box">
        <h1>Academic writing & editing</h1>
        <div className="service-box-type">
          <Service typeService="Standard" serviceContent={["Quick","Unique","Make sens","clear"]}/> 
          <Service typeService="Medium" serviceContent={["Quick","Unique","Make sens","clear"]}/> 
          <Service typeService="Premium" serviceContent={["Quick","Unique","Make sens","clear"]}/> 
        </div> 
      </div>   
      <div className="service-box">
        <h1>Academic writing & editing</h1>
        <div className="service-box-type">
          <Service typeService="Standard" serviceContent={["Quick","Unique","Make sens","clear"]}/> 
          <Service typeService="Medium" serviceContent={["Quick","Unique","Make sens","clear"]}/> 
          <Service typeService="Premium" serviceContent={["Quick","Unique","Make sens","clear"]}/> 
        </div> 
      </div>   
      <Comment/>
      <Footer/>
    </main>
  )
}

export default Home;