import { Link } from "react-router-dom"
import Container from "./Container"

import styles from './Navbar.module.css'
import logo from '../../img/favicon.png'

function Navbar(){
    return(
        <nav class={styles.navbar}>
          <Container>
              <Link to='/'> <img src={logo} alt=" Costs" class={styles.logo}></img> </Link>
              <ul class={styles.list}>
                <li class={styles.item}>
                  <Link to='/'> Home </Link>
                </li>
                <li class={styles.item}>
                  <Link to='/projects'> Projetos</Link>
                </li>
                <li class={styles.item}>
                <Link to='/newproject'> New Projec </Link>
                </li>
                <li class={styles.item}>
                 <Link to='/company'> Company </Link>
                </li>
                <li class={styles.item}>
                <Link to='/contact'> Contact </Link>
                </li>
                
              </ul>
              
          </Container>
        </nav>
    )

}
export default Navbar