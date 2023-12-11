import styles from './produto.module.css';
import {BaseDadosAPI} from '../../back';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Produto(){
    const [itemId, setItemId] =useState([]);
    const { id } = useParams();

    const getItemId = async () => {
        const res = await fetch(`${BaseDadosAPI}/products/${id}`);
        const response = await res.json();
        setItemId(response);
    }
    useEffect(()=>{
        getItemId();
    })

    return(
        <>
           
           <div>
            <img src={itemId.image} alt="imagem do produto" width={100}/>
            <h2>{itemId.title}</h2>
            <strong>R${itemId.price}</strong>
            <p>Descrição:{itemId.description}</p>
            <h3>{itemId.category}</h3>

            </div>

        </>
    )
}