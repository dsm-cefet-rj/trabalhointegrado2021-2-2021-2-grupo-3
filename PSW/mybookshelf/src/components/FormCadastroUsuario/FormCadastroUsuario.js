import React from "react";
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
                <div className="full-box">
                    <label htmlFor="nomeUsuario">Nome do Usuário</label>
                    <input type="nomeUsuario" name="nomeUsuario" id="nomeUsuario" placeholder="Digite o nome do usuário" />
                </div>
                <div className="full-box">
                    <label htmlFor="apelidoUsuario">Apelido</label><div className="obs">Como aparecerá nos seus anúncios. (obrigatório) </div>
                    <input type="apelidoUsuario" name="apelidoUsuario" id="apelidoUsuario" placeholder="Digite seu apelido" />
                </div>
                <div class="half-box spacing">
                    <label for="cpfUsuario">CPF do usuário</label>
                    <input type="cpfUsuario" name="cpfUsuario" id="cpfUsuario" placeholder="999.999.999-99"/>
                </div>
                <div class="half-box">
                    <label htmlFor="celularUsuario">Número do celular<span class="required"></span></label>
                    <input type="celularUsuario" name="celularUsuario" id="celularUsuario" placeholder="(99) 9999-9999" pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{5})-([0-9]{4})" title="Número de telefone precisa ser no formato (99) 99999-9999" required="required" />   
                </div>

                    {/* Celular em Full box
                        <div className="full-box">
                            <label htmlFor="celularUsuario">Número do celular<span class="required"></span></label>
                            <input type="celularUsuario" name="celularUsuario" id="celularUsuario" placeholder="(99) 9999-9999" pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{5})-([0-9]{4})" title="Número de telefone precisa ser no formato (99) 99999-9999" required="required" />
                        </div>
                    */}
                <div className="full-box">
                    <label htmlFor="emailUsuario">Email</label>
                    <input type="emailUsuario" name="emailUsuario" id="emailUsuario" placeholder="Digite seu email" />
                </div>
                <div className="full-box">
                    <label htmlFor="senhaUsuario">Senha</label>
                    <input type="password" name="senhaUsuario" id="senhaUsuario" placeholder="Digite sua senha" />
                </div>
                <div className="full-box">
                    <label htmlFor="senhaUsuario">Confirmar senha</label>
                    <input type="password" name="confirmacaoSenha" id="confirmacaoSenha" placeholder="Confirme sua senha" />
                </div>
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