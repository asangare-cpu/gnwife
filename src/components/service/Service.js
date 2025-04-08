import Footer from '../footer/Footer'
import Nav from '../navigation/Nav'
import './service.css'
import ServiceItem from './ServiceItem'

function Service(){
  const services = ['Personal Writing & Editing', 'Professional Writing & Editing',
    'Creative Writing & Editing', 'Special Services'
  ]
  const prices = [{standard : 25, advanced : 35, premium : 50},
    {standard : 35, advanced : 45, premium : 70},
    {standard : 30, advanced : 50, premium : 65},
    {standard : 40, advanced : 55, premium : 75}
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
        <ServiceItem key={index} title={item} prices={prices[index]}/>
      </div>)}
    <Footer/>
    </main>
  )
}

export default Service