import Footer from '../footer/Footer'
import Nav from '../navigation/Nav'
import './service.css'
import ServiceItem from './ServiceItem'

function Service(){
  const services = ['Personal Writing & Editing', 'Professional Writing & Editing',
    'Creative Writing & Editing', 'Special Services'
  ]
  return(
    <main className='service'>
      <Nav/>
      <div className="_service">
        <p>Our services</p>
      </div>
      <div className='services-detail'>
      </div>
      {services.map((item, index)=>
      <div id={index}>
        <ServiceItem key={index} title={item}/>
      </div>)}
    
    <Footer/>
    </main>
  )
}

export default Service