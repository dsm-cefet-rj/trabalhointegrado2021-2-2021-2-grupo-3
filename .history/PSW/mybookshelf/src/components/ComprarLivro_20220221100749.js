import "../css/ComprarLivro.css"
import { Link } from "react-router-dom";
import React from "react";
import { livroAlugar } from "../store/slices/livrosAlugarSlice";
import { removerLivro } from "../store/slices/cadastroLivroSlice";
import axios from "axios";

export function ComprarLivro(){
    return(
        <Link to="/chat" className="botao-livro"
        onClick={() => {
          }}>Comprar livro</Link>
    )
}