import style from './Cartbtn.module.css'

import { BsCart3 } from "react-icons/bs";

function Cartbtn (){
    return(
        <button className={style.cart}><BsCart3 /></button>
 
    )
}
export default Cartbtn