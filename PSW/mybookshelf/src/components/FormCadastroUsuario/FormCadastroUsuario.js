import React from "react";
import Input from "../Input";
import './FormCadastroUsuario.css';


export default () => {
    return(
        <div>
            <meta charSet="UTF-8" />
            <title>Cadastro do Usuário</title>
            <link rel="stylesheet" href="css/styles_cadastro_livros.css" />
            <div id="main-container">
                <h1> Criar nova conta </h1>
                <form id="regiter-form">
                <Input 
                    className="full-box"
                    id="nomeUsuario"
                    label="Nome do Usuário"
                    placeholder="Digite o nome do usuário"
                    type="nomeUsuario"
                />    
                <Input 
                    className="full-box"
                    id="apelidoUsuario"
                    label="Apelido"
                    obs="Como aparecerá nos seus anúncios. (obrigatório)"
                    placeholder="Digite seu apelido" 
                    type="apelidoUsuario"
                />
                <Input 
                    className="half-box spacing"
                    id="cpfUsuario"
                    label="CPF do usuário"
                    placeholder="999.999.999-99" 
                    required="required"
                    type="cpfUsuario"
                />
                <Input 
                    className="half-box"
                    id="celularUsuario"
                    label="Número do celular"
                    placeholder="(99) 9999-9999" 
                    pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{5})-([0-9]{4})"
                    title="Número de telefone precisa ser no formato (99) 99999-9999"
                    required="required"
                    type="celularUsuario"
                />
                    {/* Celular em Full box
                        <div className="full-box">
                            <label htmlFor="celularUsuario">Número do celular<span class="required"></span></label>
                            <input type="celularUsuario" name="celularUsuario" id="celularUsuario" placeholder="(99) 9999-9999" pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{5})-([0-9]{4})" title="Número de telefone precisa ser no formato (99) 99999-9999" required="required" />
                        </div>
                    */}
                <Input 
                    className="full-box"
                    id="emailUsuario"
                    label="Email"
                    placeholder="Digite seu email"
                    type="emailUsuario"
                />
                <Input 
                    className="full-box"
                    id="senhaUsuario"
                    label="Senha"
                    placeholder="Digite sua senha"
                    type="password"
                />
                <Input 
                    className="full-box"
                    id="confirmacaoSenha"
                    label="Confirmar senha"
                    placeholder="Confirme sua senha"
                    type="password"
                />
                <div className="full-box">
                    <input type="checkbox" name="agreement" id="agreement" />
                    <label htmlFor="agreement" id="agreement-label">Eu li e aceito os <a href="#">termos de uso</a></label>
                </div>
                <div className="full-box">
                    <input type="submit" defaultValue="registrar" id="btn-submit" />
                </div>
                </form>
            </div>
        </div>

    );
}