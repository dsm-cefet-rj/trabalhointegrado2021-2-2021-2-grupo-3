import React from "react";
import Container_chat from "../../components/Container_chat";
import pingu from "../../img/pingu.jpg";

export default function Chat(){
    return(
        <>
        <Container_chat img={pingu} msg="mensagem teste" hora="11:30"/>
        <Container_chat msg="mensagem teste"/>
        </>
    );
}