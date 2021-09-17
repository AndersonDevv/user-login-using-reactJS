import React from 'react';

import { ContainerPage, TitlePage } from '../../components/Main';

import  { useState } from 'react';


function Home(){
    

    
    /*
    USANDO O useState()
    const [quantidade, setQuantidade] = useState(0);
    
    function aumentar(){
        setQuantidade(quantidade + 1);
      }

    function diminuir(){
        if(quantidade > 0){
            setQuantidade(quantidade - 1);
        }
    }
    */
    return (
        
        
        <ContainerPage>
            <TitlePage> 
               
            </TitlePage>
            
            <div/* 
            ----------------------------------------------------
            CÓDIGO COMENTADO
            <p>Quantidade de Produtos no carrinho: <b>{quantidade}</b></p>
            <button onClick={aumentar}>Adicionar 1 produto</button>
            <button onClick={diminuir}>Retirar 1 produto</button>
            ----------------------------------------------------
            */></div>
        </ContainerPage>
    )
}

export default Home;

