import './service.css'

function Service({typeService,serviceContent}){
  const serviceCont = serviceContent.map((item, index) => 
    <li key={index}>{item}</li>)
  return(
    <div className="_service">
      <h3>{typeService}</h3>
      <section>
        <ul>
          {serviceCont}
        </ul>
        <button>Confirm your choice</button>
      </section>
    </div>
  )
}

export default Service