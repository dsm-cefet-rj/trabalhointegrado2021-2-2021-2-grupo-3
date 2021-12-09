import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class Header extends React.Component{
    
    render(){
        return(
            <Router>
                <nav className="navbar navbar-expand-lg fixed-top bg-primary-color" id="navbar">
                <div className="container py-3">
                    <Link to="/" className="navbar-brand third-color">
                        <span>My bookshelf</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-items" 
                        aria-controls="navbar-items" aria-expanded="false" aria-label="toggle navagation">
                        <i className="bi bi-list"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-items">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active third-color" aria-current="page"> Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link third-color" > Perfil do usuario</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link third-color" > Alugar </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link third-color" > Livros alugados </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link third-color" > Devolver </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
            </Router>
        );
    }
}