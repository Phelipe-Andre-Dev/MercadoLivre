import React, {useState, useEffect} from 'react'
import Api from './Api';
import CardProdutos from './CardProdutos'
import styles from './Produtos.module.css'
import Load from './Load'


function Produtos (){
    
        const [produtos, setProdutos] = useState([]);
        const [load, setLoad] = useState (true)



        useEffect(() => {
            Api('iphone').then((response) => {
                setProdutos(response)
                setLoad(false)
            })
        }, []);

    return(

        (load && <Load/>) || (
        <section className={styles.produtos}>
            {
             produtos.map((produtos) => <CardProdutos key={produtos.id} dados={produtos}/>)
            }
    
         </section> )
           )

    
}
export default Produtos