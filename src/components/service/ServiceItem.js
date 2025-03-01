import './serviceItem.css'
import { FaCheck } from "react-icons/fa";

function ServiceItem({title,type,details}){
  return(
    <div className="item-service">
        <p>{title}</p>
      <form>
        <div className='type'>
          <div>
            <p>Standard</p>
            <div className="_detail">
            <FaCheck size={13}/> Basic proofreading for grammar, spelling, and punctuation errors.<br/>
            <FaCheck size={13}/> Light editing to improve sentence structure and clarity.<br/>
            <FaCheck size={13}/> Suitable for clients with well-drafted content needing minimal refinement.<br/>
            <FaCheck size={13}/> One round of revision included.<br/>
            </div>
            <button>Get it</button>
          </div>
          <div>
            <p>Advanced</p>
            <div className="_detail">
            <FaCheck size={13}/> Comprehensive editing for grammar, style, tone, and coherence.<br/>
            <FaCheck size={13}/> Content restructuring to improve flow and readability.<br/>
            <FaCheck size={13}/> Personalized suggestions to enhance emotional depth or professional impact.<br/>
            <FaCheck size={13}/> Two rounds of revisions for client satisfaction.<br/>
            </div>
            <button>Get it</button>
          </div>
          <div>
            <p>Premium</p>
            <div className="_detail">
            <FaCheck size={13}/> Full-service writing or in-depth editing tailored to the client's unique
            voice and intent.<br/>
            <FaCheck size={13}/> Extensive collaboration, including consultations for tone, style, and
            content direction.<br/>
            <FaCheck size={13}/> Creative input to add emotional resonance or professional polish.<br/>
            <FaCheck size={13}/> Unlimited revisions within the agreed project timeline.<br/>
            <FaCheck size={13}/> Priority delivery and dedicated support throughout the project.<br/>
            </div>
            <button>Get it</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ServiceItem;