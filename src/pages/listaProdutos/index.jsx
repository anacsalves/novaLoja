import styles from './ListaProdutos.module.css';
import {BaseDadosAPI} from '../../back'
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

export default function ListaProdutos(){

    const [data, setData]=useState([]);

    const listaDadosProdutos = async () =>{
        const req = await fetch(`${BaseDadosAPI}/products`);
        const res = await req.json();
        console.log(res);
        setData(res);

    }

    useEffect(()=>{
    listaDadosProdutos();
    },[])

    return(
        <>
        <div className={styles.container}>
            <div className={styles.todosProdutos}>
            {data.map((item, index)=>{
            return(
                <div className={styles.listaItens} key={index}>
                    <Link to={`/produto/${item.id}`} className={styles.link}>

                       <img src={item.image} alt="imagem do produto" width={100}/>
                        <h2>{item.title}</h2> 
                        <br />
                        <p>{item.rating.rate} ⭐; {item.rating.count} avaliações</p>
                        <p  className={styles.preco}><strong>R${item.price}</strong></p>
                    </Link>
                </div>
            )
        }
        )}
            </div>
        </div>
        
        </>
    )
}