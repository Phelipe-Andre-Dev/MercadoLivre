import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import style from './Nav.module.css'
import Cartbtn from "../components/Cartbtn"
import { CiSearch } from "react-icons/ci";
import Api from "../components/Api";
import AppContext from "../components/context/AppContext";



function Nav (){

    const {setProdutos, setLoad} = useContext(AppContext)
    const [busca, setBusca] = useState ('')
    
    
    const enviar = async (e) => {
        e.preventDefault()
        setLoad(true)
        
        if (busca === ''){
            alert('Digite sua busca')
            return false
        }

        const produtos = await Api(busca)
        setProdutos(produtos)
        setLoad(false)
        setBusca('')

    }

    return(
         
        <nav>
            <ul className={style.container}>
               
                <li className={style.input}>
                
                    <Link to='Home'>Home</Link>
                    <Link to='Produtos'>Produtos</Link>
                    <input className={style.barra} type="text" 
                    placeholder="Buscar Produtos" value={busca} 
                    onChange={(e) => setBusca (e.target.value)} />
                    <button className={style.bnt} onClick={enviar}><CiSearch /></button>
                </li>

                <Cartbtn/>
            </ul>
        </nav>
        
    )
}

export default Nav
