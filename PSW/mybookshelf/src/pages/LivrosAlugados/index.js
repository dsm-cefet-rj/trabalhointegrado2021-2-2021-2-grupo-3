import React from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

import livro1 from '../../img/livro1.jpg'
import livro2 from '../../img/livro2.jpg'
import livro3 from '../../img/livro3.jpg'
import livro4 from '../../img/livro4.jpg'

import LivrosAlugados from '../../components/LivrosAlugados'


 const livros = [{
                  titulo: "Gente Única",
                  descricao: "Este livro tem como objetivo descrever...",
                  dataAluguel: "45/12/2021",
                  proprietario: "Marquinhos DJ",
                  img: livro1
                }, {
                  titulo: "WILL",
                  descricao: "Este livro tem como objetivo descrever...",
                  dataAluguel: "30/02/2021",
                  proprietario: "Junin do Suco",
                  img: livro2
                },{
                  titulo: "Código Limpo",
                  descricao: "Este livro tem como objetivo descrever...",
                  dataAluguel: "22/10/2021",
                  proprietario: "Miguel da Massa",
                  img: livro3
                },{
                  titulo: "O Poder do Hábito",
                  descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, nventore! Iusto, at.",
                  dataAluguel: "12/12/2021",
                  proprietario: "João das Neves",
                  img: livro4
              }]

  export default function Cards (){
        return( 
        <>
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
              <LivrosAlugados livros={livros}/> 
              <Footer/>
            </div>
        </div>
        </>
        
        );
}
