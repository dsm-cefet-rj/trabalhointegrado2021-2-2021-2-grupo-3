import "../css/ComprarLivro.css"
import { Link } from "react-router-dom";
import React from "react";
import { livroAlugar } from "../store/slices/livrosAlugarSlice";
import { removerLivro } from "../store/slices/cadastroLivroSlice";
import axios from "axios";
import  { useSelector } from 'react-redux'

export function ComprarLivro(livroID){
    const token = useSelector(state => state.login.token)

    return(    
        <Link to="/chat" className="botao-livro"
        onClick={() => {axios.post('http://localhost:3000/compradolivro', {livroID}, 
        {
            headers: {
              'Authorization': 'Bearer '+ token,
        }
        })
        
        .then(function(response){
            console.log(response)

        }).catch(function(error) {
            console.log(error)
        })}}
        >
        Comprar livro</Link>
    )
}