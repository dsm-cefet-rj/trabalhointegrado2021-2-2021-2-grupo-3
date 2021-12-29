import React,{Component} from 'react';
import Modal from 'react-responsive-modal';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "../css/styles_principal.css"
import '../css/Login.css'

export class Header extends React.Component{
    
    constructor(props) {
        super(props)

        this.state = {
            login: false,
        }
    }

    onOpenModalLogin = () => {
        this.setState({ login: true });
    };

    onCloseModalclose = () => {
        this.setState({ login: false });
    };

    render() {
        const {login} = this.state;
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

                <Modal open={login} onClose={this.onCloseModalclose}>
                    <body>
                        <div id= "login-container">
                            <h1 id="fonte-branca"> Login</h1>
                            <form action="">
                                <label for="email">Email</label>
                                <input type="email" name= "email" id="email" placeholder="Digite seu email:" autocomplete="off"/>
                                <label for="password">Senha</label>
                                <input type="password" name="password" id="password" placeholder="Digite sua senha"/>
                                <a href="#" id="forgot- pass">Esqueceu a senha?</a>
                                <input type="submit" value="Login"/>
                            </form>
                            
                            <div id= "register-container">
                                <p id="fonte-branca">Ainda não tem uma conta?</p>
                                <Link to="/CadastroUsuario"> Cadastrar Usuario</Link>
                            </div>
                        </div>
                    </body>
              </Modal>
              </>
        );
    }
}