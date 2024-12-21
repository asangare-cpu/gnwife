import './serviceItem.css'

function ServiceItem({title,type,details}){
  return(
    <div className="item-service">
        <p>{title}</p>
      <div className='type'>
        <div>
          <p>Standard</p>
          <div className="_detail">{details}</div>
          <button>Get it</button>
        </div>
        <div>
          <p>Advanced</p>
          <div className="_detail">{details}</div>
          <button>Get it</button>
        </div>
        <div>
          <p>Premium</p>
          <div className="_detail">{details}</div>
          <button>Get it</button>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem;