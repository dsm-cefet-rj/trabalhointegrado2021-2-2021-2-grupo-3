import React from "react";
import Container_chat from "../../components/Container_chat";
import pingu from "../../img/pingu.jpg";

export default function Chat(){
    return(
        <div className="chat">
        <Container_chat className="container"img={pingu} msg="mensagem teste" hora="11:30"/>
        <Container_chat className="container darker"msg="mensagem teste"/>
        <Container_chat className="container darker"msg="mensagem teste155000"/>
        <Container_chat className="container darker" msg="vai"/>
		<textarea placeholder="Type your message"></textarea>
        <i class="bi bi-images"></i>
        <a href="#" class= "btn btn-primary">Enviar</a>
        </div>
    );
}