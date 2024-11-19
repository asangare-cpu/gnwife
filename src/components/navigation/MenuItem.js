import useState from "react"

function MenuItem({itemName, dropdowListe}){
  const [showDrop, setShowDrop] = useState(false)
  // const items = dropdowListe.map((item,index)=>
  //   <li key={index}><a href="/">{item}</a></li>
  // )
  const showDropdown = ()=>{
    setShowDrop(!showDrop)
  }
  return(
    <div>
      <button onClick={showDropdown} >{itemName}</button>
      
      {/* <ul>
      { 
        showDrop === true ? items : <></>
      }
      </ul> */}
    </div>
  )
}

export default MenuItem