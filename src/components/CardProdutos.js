import React from 'react'
import styles from './CardProdutos.module.css'


function CardProdutos ({dados}){

    const{thumbnail, title, price} = dados;

    return(
        <section className={styles.container}>
            <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} 
            alt="Produtos" className={styles.img}/>

            <div className={styles.inform}>
                <h2 className={styles.title}>{title}</h2>
                <h2 className={styles.price}>{price.toLocaleString('pt-br',{
                    style: 'currency',
                    currency: 'BRL',
                })}</h2>
                

                <button className={styles.btn} type='submit'>+</button>
            </div>
        </section>

    );
}
export default CardProdutos;

