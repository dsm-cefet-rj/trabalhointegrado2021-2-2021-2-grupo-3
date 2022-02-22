import React, { useState } from "react";
import Input from './Input';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { salvarToken } from "../store/slices/loginSlice";
import { Link } from "react-router-dom";
import axios from 'axios';
import { carregarCatalogo } from "../store/slices/cadastroLivroSlice";

export default function () {
    const dispatch = useDispatch()
    const [formValues, setFormValues] = useState({})
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const loginData = {
            email: e.target[0].value,
            password: e.target[1].value
        }
        axios.post('http://localhost:3000/login', loginData)
        .then(function (response) {
                dispatch(salvarToken(response.data))
                axios.get('http://localhost:3000/livros', {
                    headers: {
                        'Authorization': 'Bearer ' + response.data.token,
                    }
                }).then(response => {
                    dispatch(carregarCatalogo(response.data.livros))
                    navigate('/Main')
                }).catch(err => {
                    console.log(err)
                })
                
            }).catch(function (error) {
                console.log(error)
                alert("Erro no login!!")
            })

    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    return (
        <div id="login-container">
            <form onSubmit={handleSubmit}>
                <Input
                    className="full-box"
                    type="email"
                    label="Email"
                    placeholder="Digite seu email..."
                    id="email"
                    onChange={handleInputChange}
                    value={formValues.email || ''}
                />
                <Input
                    className="full-box"
                    type="password"
                    label="Senha"
                    placeholder="Digite sua senha..."
                    id="password"
                    onChange={handleInputChange}
                    value={formValues.password || ''}
                />

                <div id="register-container">
                    <p id="fonte-branca">Ainda não tem uma conta?</p>
                    <Link to="/CadastroUsuario"> Cadastrar Usuario</Link>
                </div>

                <div class="full-box">
                    <input type="submit" value="Logar" id="btn-submit" />
                </div>

                
            </form>
        </div>
    )
}