import React from 'react'
import  Cards  from '../../components/Cards'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import axios from 'axios'
import { carregarCatalogo } from '../../store/slices/cadastroLivroSlice'

import { useSelector, useDispatch } from "react-redux"

var cont = 0
    async function pegaDados (token) {
        if (cont == 0) {
        try {
           const response = axios.get('http://localhost:3000/livros',{
            headers: {
              'Authorization': 'Bearer '+ token,
            }
        })
           cont += 1;
           return (await response).data.livros
        }
        catch (error) {
            console.error(error);
        }
        
        }
    }

export default function AluguelLivros (){
    const dispatch = useDispatch()
    const token = useSelector(state => state.login.token)
    pegaDados(token).then(response => {
        dispatch(carregarCatalogo(response))
    })

    const livros = useSelector(state => state.cadastroLivro)     

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
                <Header/>
                <Cards livros={livros}/>
                <Footer/>
            </div>
        </div>
    </>
        );
};
