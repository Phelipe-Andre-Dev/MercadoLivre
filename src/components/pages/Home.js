import styles from './Home.module.css'
import saivings from '../layout/saivings.jpeg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return(
        <section className={styles.container}>
            <h1 className={styles.h1}>Bem-vindo ao Gerenciador <span className={styles.h1_span}>Financeiro</span></h1>
            <p className={styles.p}>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to='/newproject' text='Criar Projeto'/>
            <img  className={styles.saivings}  to='/' src={saivings} alt='costs'></img>
        </section>

    )
}
export default Home