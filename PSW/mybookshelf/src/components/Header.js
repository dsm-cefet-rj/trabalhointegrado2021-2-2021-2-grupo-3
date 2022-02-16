import React,{useState} from 'react';
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';
import { salvarToken } from '../store/slices/loginSlice';
import { useNavigate } from "react-router-dom";
import "../css/styles_principal.css"
import '../css/Login.css'


export class Header extends React.Component{
    
    constructor(props) {
        super(props)
        
        this.state = {
            login: false,
            email: null , 
            password: null
        }
    }

    handleInputChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    render() {
        var {email, password} = this.state;
        return( 
            <>         
                <nav className="navbar navbar-expand-lg fixed-top bg-primary-color" id="navbar">
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
                                <Link to="/CadastroUsuario" className="nav-link third-color" > Perfil do usuario</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/" className="nav-link third-color" > Alugar </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/LivrosAlugados" className="nav-link third-color" > Livros alugados </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/DevolverLivro" className="nav-link third-color" > Devolver </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to="/AlugarLivro" className="nav-link third-color" > Cadastrar Livro </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Chat" className="nav-link third-color" > Chat </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Login" className="nav-link third-color" > Login </Link>
                            </li>
                        </ul>
                </div>
                </nav>

                
              </>
        );
    }
}