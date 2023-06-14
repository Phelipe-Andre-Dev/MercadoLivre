import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../layout/img.png'

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container>

                <Link><img className={styles.img} to='/' src={logo}  alt='costs'></img></Link>
                 
                 <ul className={styles.list}>
                    <li className={styles.item}>
                      <Link to='/'>Home</Link>
                    </li> 

                    <li className={styles.item}>
                       <Link to='/newproject'>Novo Projeto</Link>
                    </li>

                    <li className={styles.item}>
                       <Link to='/projects'>Projeto</Link>
                    </li>
                </ul>
            </Container>
        </nav>

    )
}
export default Navbar