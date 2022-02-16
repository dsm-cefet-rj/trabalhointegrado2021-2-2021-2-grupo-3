import React,{useState} from 'react';
import Modal from 'react-responsive-modal';
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

    onOpenModalLogin = () => {
        this.setState({ login: true });
    };

    onCloseModalclose = () => {
        this.setState({ login: false });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        const loginData = {
            email: e.target[0].value,
            password: e.target[1].value
        }

        axios.post('http://localhost:3000/login', loginData)
        .then(function(response){
            console.log(response)
            salvarToken(response.data)
            const navigate = useNavigate()
            navigate('/')
        }).catch(function(error) {
            console.log(error)
        })

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
                                <button className="nav-link third-color" id="login" onClick={this.onOpenModalLogin}>Login</button>
                            </li>
                        </ul>
                </div>
                </nav>

                <Modal open={this.state.login} onClose={this.onCloseModalclose} >
                        <div id= "login-container">
                            <div className="LoginClose"> 
                            <Link to="/LivrosAlugados"> X </Link>
                            </div>
                            <h1 id="fonte-branca"> Login</h1>
                            <form onSubmit={this.handleSubmit}>
                                <label for="email">Email</label>
                                <input type="email" name= "email" id="email" 
                                placeholder="Digite seu email:" autoComplete='off'
                                onChange={this.handleInputChange}
                                value={email || ""}
                                />
                                <label for="password">Senha</label>
                                <input type="password" name="password" id="password" placeholder="Digite sua senha" 
                                onChange={this.handleInputChange}
                                value={password || ""}/>
                                {/* <a href="#" id="forgot- pass">Esqueceu a senha?</a> */}
                                <input type="submit" value="Login" id='Login'/>
                            </form>
                            
                            <div id= "register-container">
                                <p id="fonte-branca">Ainda não tem uma conta?</p>
                                <Link to="/CadastroUsuario"> Cadastrar Usuario</Link>
                            </div>
                        </div>
              </Modal>
              </>
        );
    }
}