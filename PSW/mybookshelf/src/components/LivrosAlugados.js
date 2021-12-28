import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import "../css/styles_principal.css";
import {useDispatch} from "react-redux";
import { agendarDevolução } from '../store/actions/devolução.action';


 export default ({livros}) => {
     const dispatch = useDispatch()
     return (
      <div className="">
      <div className=" table-responsive-stack">
      <p className="livrosAlugados">Livros Alugados</p>
      <table>
        <tr>
        {
            livros.map( livro => {
              return <th width="15%">
                 <div className="card">
                <img src={livro.img} className="card-img-top" alt="Livro1"/>
                <div className="card-body">
                  <h5 className="card-title">{livro.titulo}</h5>
                  <p className="card-text">{livro.descricao}</p>
                  <Link 
                    to="/DevolverLivro" 
                    className="btn btn-primary"
                    onClick={() => dispatch(agendarDevolução(livro))}
                  >
                    Devolver
                  </Link>
                </div>
              </div>
            </th>
            })
        }
        </tr>
       </table> 
          {/* <Link to="/" className="btn btn-primary">Ver mais livros alugados</Link>    */}
      </div>      
      </div>
       )
    
 }