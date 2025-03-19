import { Link } from "react-router-dom"
import Container from "./Container"

import styles from './Navbar.module.css'
import moeda from '../../img/moeda.svg'

function Navbar(){
    return(
        <nav class={styles.navbar}>
          <Container>
              <Link to='/'> <img src={moeda} alt=" Costs" class={styles.moeda}></img> </Link>
              <ul className={styles.list}>
                <li class={styles.item}>
                  <Link to='/'> Home </Link>
                </li>
                <li className={styles.item}>
                  <Link to='/projects'> Projetos</Link>
                </li>
                <li className={styles.item}>
                <Link to='/newproject'> New Projec </Link>
                </li>
                <li className={styles.item}>
                 <Link to='/company'> Company </Link>
                </li>
                <li className={styles.item}>
                <Link to='/contact'> Contact </Link>
                </li>
                
              </ul>
              
          </Container>
        </nav>
    )

}
export default Navbar