import React from 'react'
import livro1 from '../img/livro1.jpg'
import livro2 from '../img/livro2.jpg'
import livro3 from '../img/livro3.jpg'
import livro4 from '../img/livro4.jpg'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import "../css/styles_principal.css"

function Cards (){
        return(
        <div className="">
            <div className=" table-responsive-stack">
            <p className="livrosAlugados">Livros Alugados</p>
            <table>
                <tr>
                    <th width="15%">
                         <div className="card">
                        <img src={livro1} className="card-img-top" alt="Livro1"/>
                        <div className="card-body">
                          <h5 className="card-title">Gente Única</h5>
                          <p className="card-text">Este livro tem como objetivo descrever...</p>
                          <Link to="/" className="btn btn-primary">Devolver</Link>
                        </div>
                      </div>
                    </th>
                    <th width="15%"> 
                        <div className="card">
                        <img src={livro2} className="card-img-top" alt="Livro2"/>
                        <div className="card-body">
                          <h5 className="card-title">WILL</h5>
                          <p className="card-text">Este livro tem como objetivo descrever...</p>
                          <Link to="/" className="btn btn-primary">Devolver</Link>
                        </div>
                      </div> 
                    </th> 
                    <th width="15%"> 
                        <div className="card">
                            <img src={livro3} className="card-img-top" alt="Livro3"/>
                            <div className="card-body">
                                <h5 className="card-title">Código Limpo</h5>
                                <p className="card-text">Este livro tem como objetivo descrever...</p>
                                <Link to="/" className="btn btn-primary">Devolver</Link>
                            </div>
                         </div>
                    </th> 
                    <th width="15%">
                        <div className="card">
                            <img src={livro4} className="card-img-top" alt="Livro4"/>
                            <div className="card-body">
                              <h5 className="card-title">O poder do hábito</h5>
                              <p className="card-text">Este livro tem como objetivo descrever...</p>
                              <Link to="/DevolverLivro" className="btn btn-primary">Devolver</Link>
                            </div>
                          </div> 
                    </th> 
                </tr>
            </table>        
                <Link to="/" className="btn btn-primary">Ver mais livros alugados</Link>   
            </div>      
        </div>
        );
}
export default Cards