import React, {useState} from "react";
import Input from './Input';
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { salvarToken } from "../store/slices/loginSlice";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import axios from 'axios';

export default function () {
    const dispatch = useDispatch()
    const [formValues, setFormValues] = useState({})
    const navigate = useNavigate()
    
    const handleSubmit = (e) =>  {
        e.preventDefault()
        const loginData = {
            email: e.target[0].value,
            password: e.target[1].value
        }
        axios.post('http://localhost:3000/login', loginData)
        .then(function(response){
            console.log(response)
            dispatch(salvarToken(response.data))
        }).catch(function(error) {
            console.log(error)
        })

        navigate('/')
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    return (
        <div id="main-container">
            <form onSubmit={handleSubmit}>
                <Input
                    className="full-box"
                    label="Nome do Livro"
                    placeholder="Login"
                    id="email"
                    onChange={handleInputChange}
                    value={formValues.email || ''}
                />
                <Input
                    className="full-box"
                    label="Descrição"
                    placeholder="Senha"
                    id="password"
                    onChange={handleInputChange}
                    value={formValues.password || ''}
                />

                <div id= "">
                    <p id="fonte-branca">Ainda não tem uma conta?</p>
                    <Link to="/CadastroUsuario"> Cadastrar Usuario</Link>
                </div>
                
                <div class="full-box">
                    <input type="submit" value="Logar" id="btn-submit"/>
                </div>
            </form>
        </div>
    )
}