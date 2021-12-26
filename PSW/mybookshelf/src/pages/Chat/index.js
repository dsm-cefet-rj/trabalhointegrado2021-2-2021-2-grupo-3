import React, {useState, useEffect} from "react";
import Container_chat from "../../components/Container_chat";
import rino from "../../img/rino.jpg";
import sapin from "../../img/sapin.jpg";
import { Header } from "../../components/Header";


const var_chat = [
{
    className: "container darker",
    img: sapin,
    msg: "mensagem teste",
    hora: "11:33"
}]

export default function Chat(){
    const [chat_state, set_chat_state] = useState([])
    const [chat_conversa, set_chat_conversa] = useState([])
    
    useEffect(() => {
        set_chat_conversa(var_chat)
    },[])
    
    function handleSubmit(e) {
        e.preventDefault()
        const chat_data = new FormData(e.target)
        const ref_chat_data = Object.fromEntries(chat_data)
        console.log(ref_chat_data)
        const envia_mensagem = {
            className: "container",
            img: rino,
            hora: new Date().getHours()
        }
        var_chat.push(Object.assign(ref_chat_data, envia_mensagem))
        set_chat_conversa(var_chat)
        set_chat_state("")
    }
    return(
        <div>
            <Header/>
            <div className="chat">
                <Container_chat chat={chat_conversa}/>
                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <textarea 
                        value={chat_state} 
                        onChange={e => set_chat_state(e.target.value)}
                        placeholder="" 
                        name="msg"
                    ></textarea>
                <i class="bi bi-images"></i>
                <input type="submit" href="#" class= "btn btn-primary" value="Enviar"/>
                </form>
            </div>
        </div>
    );
}