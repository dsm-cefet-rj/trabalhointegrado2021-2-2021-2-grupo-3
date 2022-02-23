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
            dispatch(livroAlugar(livro))
            dispatch(removerLivro(livro))
            axios.post("http://localhost:3000/livros/alugar", { livroID: livro._id })
              .then((response) => {
                console.log(response)

              })
              .catch((error) => { console.log(error) })
          }}>Comprar livro</Link>
    )
}