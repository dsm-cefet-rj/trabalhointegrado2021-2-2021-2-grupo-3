import React, {useState} from "react";
import Input from './Input'

const ex = {
    titulo: "Gente Única",
    descricao: "Este livro tem como objetivo descrever...",
    dataAluguel: "45/12/2021",
    proprietario: "Marquinhos DJ",
    img: "livro1"
  }

export default function () {
    const [formValues, setFormValues] = useState({})
    
    const handleSubmit = (e) =>  {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)

        console.log(data)
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormValues({...formValues, [name]: value})
    }

    return (
        <>
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
                <div class="full-box">
                    <input type="submit" value="Cadastrar" id="btn-submit"/>
                </div>
            </form>
        </>
    )
}