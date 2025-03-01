import ContactImage from "../../assets/images/typewriter-old.jpg"
import Footer from '../footer/Footer'
import Nav from '../navigation/Nav'
import './contact.css'
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_8aa2mcp"
const TEMPLATE_ID = "template_xgh0cmm"
const PUBLIC_ID = "XQmMV_iiB59it9CMI"

function Contact(){

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_ID)
    .then((result) => {
      alert('Message Sent Successfully')
    }, (error) => {
      console.log(error.text);
      alert('Something went wrong!')
    });
      e.target.reset()
    };
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
          <form onSubmit={handleOnSubmit}>
            <label htmlFor="name">Name : </label>
            <input type="text" id="name" name="name" placeholder="Your name"/>
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" name="email" placeholder="Your email"/>
            <input type="file" id="file" name="file" placeholder="Upload your document"/>
            <label htmlFor="message">Message : </label>
            <textarea id="message" name="message"></textarea>
            <button type="submit">Send</button>
          </form>
        </aside>
      </section>
      <Footer/>
    </>
  )
}

export default Contact;