import "../css/ComprarLivro.css"
import { Link } from "react-router-dom";
import React from "react";
import { livroAlugar } from "../store/slices/livrosAlugarSlice";
import { removerLivro } from "../store/slices/cadastroLivroSlice";
import axios from "axios";

export function ComprarLivro(livroID){
    return(
        
        <Link to="/chat" className="botao-livro"
        onClick={() => {axios.post('http://localhost:3000/compradolivro', {livroID})
        .then(function(response){
            console.log(response)

        }).catch(function(error) {
            console.log(error)
        })}}
        >
        Comprar livro</Link>
    )
}