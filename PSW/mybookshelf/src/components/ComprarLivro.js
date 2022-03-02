import "../css/ComprarLivro.css"
import React from "react";
import axios from "axios";
import  { useSelector } from 'react-redux'

export function ComprarLivro({livro}){
    const token = useSelector(state => state.login.token)
    const livroAlugado = useSelector(state => state.devolucao)

    return(    
        <div className="botao-livro"
        onClick={() => {
        axios.post('http://localhost:3000/compradolivro', {livroID: livroAlugado._id}, 
        {
            headers: {
              'Authorization': 'Bearer '+ token,
        }
        })
        
        .then(function(response){
            alert("livro comprado!!")
            console.log(response)

        }).catch(function(error) {
            alert("Erro ao efetuar compra!!")
            console.log(error)
        })}}
        >
        Comprar livro</div>
    )
}