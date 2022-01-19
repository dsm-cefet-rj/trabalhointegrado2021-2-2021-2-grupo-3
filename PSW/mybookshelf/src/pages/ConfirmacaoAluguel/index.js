import React from 'react'
import ConfirmarAluguel from "../../components/ConfirmarAluguel";
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Link, useHistory , useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';


import { useSelector } from "react-redux"


export default function AluguelLivros (){
    const dispatch = useDispatch()
    const livroAlugado = useSelector(state => state.alugados)    
    return(
    <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
            rel="stylesheet" 
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
            crossorigin="anonymous"/>

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>

            <link rel="stylesheet" href="css/styles_principal.css"/>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
            crossorigin="anonymous"> </script>
            
        <div className = "App">
            <div>
                <Header/><br/><br/><br/><br/><br/>
                <ConfirmarAluguel livro={livroAlugado}/>
               
            </div>
        </div>
    </>
        );
};
