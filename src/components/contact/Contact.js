import ContactImage from "../../assets/images/typewriter-old.jpg"
import Footer from '../footer/Footer'
import Nav from '../navigation/Nav'
import './contact.css'

function Contact(){
  return(
    <>
      <Nav/>
      <section className="contact-us">
        <article className="contact-article">
          <p>CONTACT US</p>
          <div className="contact-image">
            {/* <img src={ContactImage} alt="contact-image"></img> */}
            <div></div>
          </div>
        </article>
        <aside>
          <form>
            <label htmlFor="name">Name : </label>
            <input type="text" id="name" name="name" placeholder="Your name"/>
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" name="email" placeholder="Your email"/>
            <input type="file" id="file" name="file" placeholder="Upload your document"/>
            <label htmlFor="message">Message : </label>
            <textarea></textarea>
            <button>Send</button>
          </form>
        </aside>
      </section>
      <Footer/>
    </>
  )
}

export default Contact;