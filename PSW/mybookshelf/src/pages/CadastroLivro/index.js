import React from "react";
import { Header } from '../../components/Header';
import CadastroLivroForm from '../../components/CadastroLivroForm'

export default function CriaçãoLivros() {
    return (
        <>
            <Header/>
            <h2>Cadastrar livro</h2>
            <CadastroLivroForm/>
        </>
    )
}