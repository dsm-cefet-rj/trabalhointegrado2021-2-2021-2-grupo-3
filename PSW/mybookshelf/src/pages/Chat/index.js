import React from "react";
import Container_chat from "../../components/Container_chat";
import pingu from "../../img/pingu.jpg";

export default function Chat(){
    return(
        <>
        <Container_chat img={pingu} msg="mensagem teste" hora="11:30"/>
        <Container_chat msg="mensagem teste"/>
        <footer>
			<textarea style="width: 100%;" placeholder="Type your message"></textarea>
		</footer>
        <i style="font-size: 2.2em;" class="bi bi-images"></i>
        <a style="transform: translate(20px, -7px);" href="#" class= "btn btn-primary">Enviar</a>
        </>
    );
}