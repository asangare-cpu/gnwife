import { Link } from "react-router-dom"
import styled from "styled-components"
import './nav.css'
import { useState } from "react"
function Nav(){
  const navItems = ["Home","Services", "Why gnwife?", "About us"]
  const items = navItems.map((item, index)=>
  <NavLink key={index}>
    {item}
  </NavLink>)
  return(
    <nav>
      <div>
        <MyLink to="/gnwife" >
          <p>GNWIFE </p>
          <i>Master Edit</i>
        </MyLink>
      </div>
      <section>
      {items}
      <aside>
        <Link>Login</Link>
      </aside>
      </section>
    </nav >
  )
}

export default Nav;

const MyLink = styled(Link)`
  text-decoration : none;
`
const NavLink = styled(Link)`
  text-decoration : none;
  font-family: fantasy;
  padding : 0 0 0 5%;
  &:hover{
    background-color: 'blue';
  }
`