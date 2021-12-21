import React from "react";

export default (props) => {
    return (
        <div className={props.className}>
          <div class="card-img">
              <img src={props.img} class="book-img"/>
          </div>
          <div class="card-body">
            <h3 class="card-title">{props.title}</h3>
            <div class="card-description">
              <h5>Descrição:</h5>
              <p>
                {props.descricao}
              </p>
            </div>
                  
            <div class="rent-information">
              <p class="rent-date"><strong>Alugado em:</strong> {props.dataAluguel}</p>
              <p><strong>Proprietário:</strong> {props.proprietario}</p>
            </div>
          </div>
        </div> 
    );
}