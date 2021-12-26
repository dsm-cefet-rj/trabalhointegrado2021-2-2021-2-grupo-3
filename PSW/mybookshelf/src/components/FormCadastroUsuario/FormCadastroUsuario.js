import React, { useState } from "react";
import './FormCadastroUsuario.css';

export default () => {

    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e) => {
        const { name, value} = e.target;
        setFormValues({...formValues, [name]: value });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log('*** handleSubmit', data);
    };

    console.log('**** formValues', formValues);

    return(
        <div>
            <meta charSet="UTF-8" />
            <title>Cadastro do Usuário</title>
            <link rel="stylesheet" href="css/styles_cadastro_livros.css" />
            <div id="main-container">
                <h1> Criar nova conta </h1>
                <form onSubmit={handleSubmit}  id="regiter-form">
                <div className="full-box">
                    <label htmlFor="nomeUsuario">Nome do Usuário</label>
                    <input
                        type="text"
                        name="name"
                        id="nomeUsuario"
                        placeholder="Digite o nome do usuário"
                        onChange={handleInputChange}
                        value={formValues.name || ''}
                    />
                </div>
                <div className="full-box">
                    <label htmlFor="apelidoUsuario">Apelido</label><div className="obs">Como aparecerá nos seus anúncios. (obrigatório) </div>
                    <input 
                        type="text" 
                        name="nickname" 
                        placeholder="Digite seu apelido" 
                        onChange={handleInputChange}
                        value={formValues.nickname || ''}
                    />
                </div>
                <div class="half-box spacing">
                    <label for="cpfUsuario">CPF do usuário</label>
                    <input
                        type="cpf" 
                        name="cpf"  
                        placeholder="999.999.999-99"
                        onChange={handleInputChange }
                        value={formValues.cpf || ''}
                    />
                </div>
                <div class="half-box">
                    <label htmlFor="celularUsuario">Número do celular<span class="required"></span></label>
                    <input
                        type="cel"
                        name="cel"
                        placeholder="(99) 9999-9999" 
                        //pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{5})-([0-9]{4})" 
                        title="Número de telefone precisa ser no formato (99) 99999-9999" 
                        required="required"
                        onChange={handleInputChange}
                        value={formValues.cel || ''} 
                    />   
                </div>

                    {/* Celular em Full box
                        <div className="full-box">
                            <label htmlFor="celularUsuario">Número do celular<span class="required"></span></label>
                            <input type="celularUsuario" name="celularUsuario" id="celularUsuario" placeholder="(99) 9999-9999" pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{5})-([0-9]{4})" title="Número de telefone precisa ser no formato (99) 99999-9999" required="required" />
                        </div>
                    */}
                <div className="full-box">
                    <label htmlFor="emailUsuario">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Digite seu email" 
                        onChange={handleInputChange}
                        value={formValues.email || ''}
                    />
                </div>
                <div className="full-box">
                    <label htmlFor="senhaUsuario">Senha</label>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Digite sua senha"
                        onChange={handleInputChange}
                        value={formValues.password || ''}
                    />
                </div>
                <div className="full-box">
                    <label htmlFor="senhaUsuario">Confirmar senha</label>
                    <input 
                        type="password" 
                        name="confirmacaoPassword" 
                        placeholder="Confirme sua senha" 
                    />
                </div>
                <div className="full-box">
                    <input type="checkbox" name="agreement" id="agreement" />
                    <label htmlFor="agreement" id="agreement-label">Eu li e aceito os <a href="#">termos de uso</a></label>
                </div>
                <div className="full-box">
                    <input 
                        type="submit" 
                        defaultValue="registrar" 
                        id="btn-submit" 
                    />
                </div>
                </form>
            </div>
        </div>

    );
}