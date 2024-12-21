import { useState } from "react";
import { FaPlus, FaMinus} from "react-icons/fa6";
import './faq.css'

function FaqItem({question, answer}){
  const [itemFaq, setItemFaq] = useState(false)
  return(
    <div className="faq">
      <section>
        <button onClick={()=>setItemFaq(!itemFaq)}>
            {itemFaq? <FaMinus size={20}/>: <FaPlus size={20}/>}
        </button>
        <aside>{question}</aside>
      </section>
      {itemFaq ? <article>{answer}</article> : ""}
    </div>
  )
}

export default FaqItem;