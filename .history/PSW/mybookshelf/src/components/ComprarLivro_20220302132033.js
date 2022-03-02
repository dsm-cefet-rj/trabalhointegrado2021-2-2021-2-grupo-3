import "../css/ComprarLivro.css"
import { Link } from "react-router-dom";
import React from "react";
import { livroAlugar } from "../store/slices/livrosAlugarSlice";
import { removerLivro } from "../store/slices/cadastroLivroSlice";
import axios from "axios";
import  { useSelector } from 'react-redux'

export function ComprarLivro({livro}){
    const token = useSelector(state => state.login.token)
    const livroAlugado = useSelector(state => state.devolucao)

    return(
        <div className="botao-livro"    
           
            onClick={() => {axios.post('http://localhost:3000/compradolivro', {livroID: livroAlugado._id}, 
            {
                headers: {
                'Authorization': 'Bearer '+ token,
            }
            })            
            .then(function(response){
                console.log(response)

            }).catch(function(error) {
                console.log(error)
            }
            
            )}}>
            
            Comprar livro
        </div>
    )
}