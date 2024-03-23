import { Link } from "react-router-dom"
import { useState } from "react"
import style from './Nav.module.css'
import Cartbtn from "../components/Cartbtn"
import { CiSearch } from "react-icons/ci";
import Api from "../components/Api";



function Nav (){

    const [busca, setBusca] = useState ('')
   

    const enviar = async (e) => {
        e.preventDefault()

        
        if (busca === ''){
            alert('Digite sua busca')
            return false
        }

        const produtos = await Api()
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
