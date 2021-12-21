import React from "react";
import Container_chat from "../../components/Container_chat";
import pingu from "../../img/pingu.jpg";
import rino from "../../img/rino.jpg";
import hipo from "../../img/hipo.png";
import sapin from "../../img/sapin.jpg";

const var_chat = [{
    className: "container",
    img: pingu,
    msg: "mensagem teste",
    hora: "11:30"
},
{
    className: "container darker",
    img: rino,
    msg: "mensagem teste",
    hora: "11:31"
},
{
    className: "container",
    img: hipo,
    msg: "mensagem teste",
    hora: "11:32"
},
{
    className: "container darker",
    img: sapin,
    msg: "mensagem teste",
    hora: "11:33"
}]

export default function Chat(){
    return(
        <div className="chat">
        <Container_chat chat={var_chat}/>
		<textarea placeholder=""></textarea>
        <i class="bi bi-images"></i>
        <a href="#" class= "btn btn-primary">Enviar</a>
        </div>
    );
}