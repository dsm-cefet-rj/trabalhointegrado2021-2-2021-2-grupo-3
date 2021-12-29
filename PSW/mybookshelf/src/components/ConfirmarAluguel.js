import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {livroAlugar} from "../store/actions/livroAlugar.action"
import {removerLivro} from "../store/actions/cadastroLivro.action"
import { useDispatch } from 'react-redux';

export default ({livro}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <p class="confirmarAluguel">Confirmar Aluguel</p>
          <div class="card-img">
              <img src={livro.img} class="book-img"/>
          </div>
          <div class="card-body">
            <h3 class="card-title">{livro.title}</h3>
            <div class="card-description">
              <h5>Descrição:</h5>
              <p>
                {livro.descricao}
              </p>
            </div>
                  
            <div class="rent-information">
              <p class="rent-date"><strong>Alugado em:</strong> {livro.dataAluguel}</p>
              <p><strong>Proprietário:</strong> {livro.proprietario}</p>
            </div>
            <table>
                <tr>
                    <Link to="/LivrosAlugados" className= "btn btn-primary btnConfirmarAluguel" 
                    onClick={()=> {
                    dispatch(livroAlugar(livro))
                    dispatch(removerLivro(livro))
                    }}>Confirmar Aluguel</Link>
                </tr>
            </table> 
          </div>
        </div> 
    );
}