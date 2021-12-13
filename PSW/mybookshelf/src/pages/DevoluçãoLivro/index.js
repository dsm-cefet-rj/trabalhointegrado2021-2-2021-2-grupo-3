import React from "react";
import CardInfoAluguel from "../../components/CardInfoAluguel";
import Input  from "../../components/Input";
import livro from '../../img/livro4.jpg'

export default function DevoluçãoLivro() {
    return(
        <div>
            <h1> Marcar Devolução </h1>
            <CardInfoAluguel
                img={livro}
                title="O Poder do Hábito" 
                descricao="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
                nventore! Iusto, at. Sint, eum! Laborum nostrum expedita odit! 
                Distinctio quaerat sed temporibus, optio mollitia porro quia molestias 
                doloribus harum eius."
                dataAluguel="12/12/2021" 
                proprietario="Junin da Maçã"
            />
            <form id="devolution-form">
                <Input 
                    className="half-box spacing"
                    id="dataDevolução"
                    label="Agendar Devolução"
                    placeholder="Digite a Data para a Devolução"
                    type="date"
                />
                <div class="full-box">
                    <input type="submit" value="registrar" id="btn-submit"/>
                </div>
            </form>
            
        </div>
    );
};