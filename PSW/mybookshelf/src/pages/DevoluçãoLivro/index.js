import React, {useState, useEffect} from "react";
import CardInfoAluguel from "../../components/CardInfoAluguel";
import Input  from "../../components/Input";
import { Header } from '../../components/Header';
import {useSelector} from 'react-redux';

export default function DevoluçãoLivro() {
    const livroAlugado = useSelector(state => state.devolucao)
    const [formValues, setFormValues] = useState({})
    const [livroInfoAlugado, setLivroAlugado] = useState({})

    useEffect(() => {
        setLivroAlugado(livroAlugado)
    }, [])
    
    const handleInputChange = (e) => {
        const {name, value} = e.target
        console.log("name: "+name + " value: "+ value)
        setFormValues({[name]: value})
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        const devolucaoData = Object.assign(livroInfoAlugado, data)
        console.log(devolucaoData)
    }

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
                    img={livroInfoAlugado.img}
                    title={livroInfoAlugado.titulo}
                    descricao={livroInfoAlugado.descricao}
                    dataAluguel={livroInfoAlugado.dataAluguel}
                    proprietario={livroInfoAlugado.proprietario}
                />
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
                    <div class="full-box">
                        <input type="submit" value="registrar" id="btn-submit"/>
                    </div>
                </form>
            </div>
            
        </div>
        </>
    );
};