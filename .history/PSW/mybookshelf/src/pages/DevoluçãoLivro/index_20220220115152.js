import React, {useState} from "react";
import CardInfoAluguel from "../../components/CardInfoAluguel";
import Input  from "../../components/Input";
import { Header } from '../../components/Header';
import {useSelector, useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { enviarMensagem } from "../../store/slices/chatSlice";
import rino from "../../img/rino.jpg";
import axios from 'axios';


export default function DevoluçãoLivro() {
    const livroAlugado = useSelector(state => state.devolucao)
    const [formValues, setFormValues] = useState({})
    const navigate = useNavigate()

    console.log(livroAlugado)
    
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormValues({[name]: value})
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        const devolucaoData = Object.assign(livroAlugado.titulo, data)
        console.log(devolucaoData)
        axios.delete('http://localhost:3000/livros/devolver', {livroID: livroAlugado._id})
        .then(function(response){
            console.log(response)

        }).catch(function(error) {
            console.log(error)
        })
        const mensagem = {
            destinatarioID: "teste1",
            remetenteID: "teste2",
            hora: Date.now(),
            msg: "Olá " + livroAlugado.proprietario + ", poderíamos marcar a devolução do "
                +livroAlugado.titulo+" para o dia: " + data.dataDevolução + "?",
            img:rino 
        }
        dispatch(enviarMensagem(mensagem))
        axios.post('http://localhost:3000/Chat/enviarMsg', mensagem)
        navigate('/Chat') ;
    }
    const dispatch= useDispatch()
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
                <CardInfoAluguel livro={livroAlugado}/>
                <form id="devolution-form" className="buttonDevolver" onSubmit={handlesubmit}>
                    <Input 
                        className="half-box spacing"
                        id="dataDevolução"
                        label="Agendar Devolução"
                        placeholder="Digite a Data para a Devolução"
                        type="date"
                        onChange={handleInputChange}
                        value={formValues.dataDevolução || ''}
                    />
                    <ComprarLivro/>
                    <div class="full-box">
                        <input type="submit" value="registrar" id="btn-submit"/>
                    </div>
                </form>
            </div>
            
        </div>
        </>
    );
};