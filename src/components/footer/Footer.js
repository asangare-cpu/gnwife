import { Link } from "react-router-dom"
import "./footer.css"
import { FaFacebook, FaWhatsapp, FaTiktok, FaInstagram, FaTwitter} from "react-icons/fa";

function Footer(){
  let currentYear = new Date().getFullYear()
  const items = ["Services", "About us", "Why gnwife?", "Contact us", 
    "Cookies & privacy policy", "FAQ"]
  const linksFooter = items.map((item, index)=>
    <li className="footer-link"><Link key={index}>{item}</Link></li>
)
  return(
    <div className="footer">
      <section>
        <ul>
          {linksFooter}
        </ul>
        <aside>
          <a href="/">
            <FaFacebook size={25}/>
          </a>
          <a href="/">
            <FaWhatsapp size={25}/>
          </a>
          <a href="/">
            <FaTiktok size={25}/>
          </a>
          <a href="/">
            <FaInstagram size={25}/>
          </a>
          <a href="/">
            <FaTwitter size={25}/>
          </a>
        </aside>
      </section>
      <i>Copyright@Gnwife 2024 - {currentYear}</i>
    </div>
  )
}

export default Footer