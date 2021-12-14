import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import "../css/styles_principal.css"

export class Footer extends React.Component{
    render(){
        return(            
            <div className="footer-dark">
                <nav className="fixed-bottom bg-primary-color" id="footer">
                    <div className="">
                        <h6 className="primary-color"/>
                            <span>My bookshelf</span>
                            <h6 className="primary-color"/>
                            <span>All rights reserved - 2021</span>
                    </div>
                </nav>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
            </div>
        );
    };
}