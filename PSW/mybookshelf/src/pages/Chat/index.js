import React, {useState} from "react";
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
    function FChat(e) {
        e.preventDefault()
        const chat_data = new FormData(e.target)
        const ref_chat_data = Object.fromEntries(chat_data)
        console.log(ref_chat_data)
    }
    return(
        <div className="chat">
        <Container_chat chat={var_chat}/>
        <form onSubmit={(e) => {FChat(e)}}>
            <textarea placeholder="" name="mensagem"></textarea>
            <i class="bi bi-images"></i>
            <input type="submit" href="#" class= "btn btn-primary" value="Enviar"/>
        </form>
        </div>
    );
}