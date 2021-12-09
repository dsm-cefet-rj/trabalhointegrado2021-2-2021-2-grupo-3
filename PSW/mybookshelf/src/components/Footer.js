import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export class Footer extends React.Component{
    render(){
        return(
        <Router>
            <div className="footer-dark">
                <footer>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-4 col-md-3 item">
                                <h3>Dúvidas frequentes</h3>
                            </div>
                            <div className="col-sm-4 col-md-3 item">
                                <h3>Sobre</h3>
                                <ul>
                                    <li><Link to="/">Empresa</Link></li>
                                    <li><Link to="/">Parceiros</Link></li>
                                    <li><Link to="/">Objetivo</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 item social"><Link to="/"><i className="icon ion-social-facebook"></i></Link><Link to="/"><i className="icon ion-social-twitter"></i></Link><Link to="/"><i className="icon ion-social-snapchat"></i></Link><Link to="/"><i className="icon ion-social-instagram"></i></Link>
                                <p className="copyright">My bookshelf 2021</p>
                            </div>
                        </div>
                    </div>
                </footer>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
            </div>
        </Router>
        );
    };
}