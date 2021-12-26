import React from "react";

export default ({livro}) => {
    return (
        <div>
          <div class="card-img">
              <img src={livro.img} class="book-img"/>
          </div>
          <div class="card-body">
            <h3 class="card-title">{livro.title}</h3>
            <div class="card-description">
              <h5>Descrição:</h5>
              <p>
                {livro.descricao}
              </p>
            </div>
                  
            <div class="rent-information">
              <p class="rent-date"><strong>Alugado em:</strong> {livro.dataAluguel}</p>
              <p><strong>Proprietário:</strong> {livro.proprietario}</p>
            </div>
          </div>
        </div> 
    );
}