import React from "react";
import CardInfoAluguel from "../../components/CardInfoAluguel";
import Input  from "../../components/Input";
import livro from '../../img/livro4.jpg'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

export default function DevoluçãoLivro() {
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
        
        <div>
            <Header/>
            <div className="center">
                <h1> Marcar Devolução </h1>
                <CardInfoAluguel
                    img={livro}
                    title="O Poder do Hábito" 
                    descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                    nventore! Iusto, at. "
                    dataAluguel="12/12/2021" 
                    proprietario="Junin da Maçã"
                />
                <form id="devolution-form" className="buttonDevolver">
                    <Input 
                        className="half-box spacing"
                        id="dataDevolução"
                        label="Agendar Devolução"
                        placeholder="Digite a Data para a Devolução"
                        type="date"
                    />
                    <div class="full-box">
                        <input type="submit" value="registrar" id="btn-submit"/>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
        </>
    );
};