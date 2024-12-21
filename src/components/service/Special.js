import { Link } from 'react-router-dom';
import styled from "styled-components"
import Service from './Service';
import './service.css'
function Special({service, description, component}){
  return(
    <section className='special'>
      <p>{service}</p>
      <div>
        {description}
      </div>
      <li>
        <StLink to="/gnwife/service">See more</StLink>
      </li>
    </section>
  )
}
export const StLink = styled(Link)`
  text-decoration : none;
  padding : 8px 30px 8px 30px;
  border-radius : 15px;
  box-shadow : 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

`
export default Special;

