import { Link } from "react-router-dom"
import Container from "./Container"

import style from './Navbar.module.css'
import logo from '../../img/favicon.png'

function Navbar(){
    return(
        <nav>
          <Container>
              <Link to='/'> <img src={logo} alt=" Costs"></img> </Link>
              <Link to='/'> Home </Link>
              <Link to='/contact'> contact </Link>
              <Link to='/company'> Company </Link>
              <Link to='/newproject'> New Project</Link>
          </Container>
        </nav>
    )

}
export default Navbar