import React from 'react'
import { Link } from "react-router-dom";
import "../css/styles_principal.css"
import { useDispatch } from 'react-redux';
import { confirmacao } from '../store/slices/confirmarAluguelSlice';

export default ({ livros }) => {
  const dispatch = useDispatch()
  return (
    <div className="">
      <div className=" table-responsive-stack">
        <p className="livrosAlugados">Livros para Alugar</p>
        <table>
          <tr>
            {livros.map(livro => {
              return <th width="15%">
                <div className="card">
                  <img src={livro.img} className="card-img-top" alt={livro.titulo} />
                  <div className="card-body">
                    <h5 className="card-title">{livro.titulo}</h5>
                    <p className="card-text">{livro.descricao}</p>
                    <Link to="/ConfirmarAluguel" className="btn btn-primary"
                      className="btn btn-primary"
                      onClick={() => {
                        dispatch(confirmacao(livro))
                      }}
                    >Alugar</Link>
                  </div>
                </div>
              </th>
            })
            }
          </tr>
        </table>
      </div>
    </div>
  )

}