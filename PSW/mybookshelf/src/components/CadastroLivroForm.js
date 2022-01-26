import React, {useState} from "react";
import Input from './Input';
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import { cadastrarLivro } from "../store/slices/cadastroLivroSlice";
import axios from 'axios';


import livro1 from '../img/livro1.jpg'

const inforEx = {
    id: Math.floor(Math.random() * 101),
    proprietario: "Lucas",
    img: livro1
  }

export default function () {
    const dispatch = useDispatch()
    const [formValues, setFormValues] = useState({})
    const [img, setImg] = useState('')
    const navigate = useNavigate()
    
    const handleSubmit = (e) =>  {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        /*data.img = img*/
        const temp = Object.assign(data,inforEx)
        alert("Livro cadastrado para alugar")

        console.log(data)
        dispatch(cadastrarLivro(temp))
        axios.post('http://localhost:3000/livros/cadastro', {temp})
        .then(function(response){
            console.log(response)

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
                    placeholder="Digite o nome do livro"
                    id="titulo"
                    onChange={handleInputChange}
                    value={formValues.titulo || ''}
                />
                <Input
                    className="full-box"
                    label="Descrição"
                    placeholder="Descrição do livro"
                    id="descricao"
                    onChange={handleInputChange}
                    value={formValues.descricao || ''}
                />
                <Input
                    className="half-box spacing"
                    label="Editora"
                    placeholder="Digite a editora"
                    id="editora"
                    onChange={handleInputChange}
                    value={formValues.editora || ''}
                />
                <Input
                    className="half-box"
                    label="Data de publicação"
                    type="date"
                    placeholder="Digite a data de publicação"
                    id="dataPublicacao"
                    onChange={handleInputChange}
                    value={formValues.dataPublicacao || ''}
                />
                <Input
                    className="half-box spacing"
                    label="Escritor(a)"
                    placeholder="Digite o escritor(a)"
                    id="escritor"
                    onChange={handleInputChange}
                    value={formValues.escritor || ''}
                />
                <Input
                    className="half-box"
                    label="Edição"
                    placeholder="Insira a edição do livro"
                    id="edicao"
                    onChange={handleInputChange}
                    value={formValues.edicao || ''}
                />
                <Input
                    className="full-box"
                    placeholder="Insira a imagem do livro"
                    type="file"
                    accept="image/png, image/jpeg"
                    id="img"
                    onChange={(e) => setImg(e.target.files[0])}
                />
                 <Input
                    className="half-box"
                    label="Preço para se alugar"
                    type="number"
                    placeholder="Digite o valor do aluguel"
                    id="valorAluguel"
                    onChange={handleInputChange}
                    value={formValues.valorAluguel || ''}
                />
                <div class="full-box">
                    <input type="submit" value="Cadastrar" id="btn-submit"/>
                </div>
            </form>
        </div>
    )
}