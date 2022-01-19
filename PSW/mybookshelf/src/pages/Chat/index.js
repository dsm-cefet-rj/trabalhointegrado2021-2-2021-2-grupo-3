import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { enviarMensagem } from "../../store/slices/chatSlice";
import Container_chat from "../../components/Container_chat";
import rino from "../../img/rino.jpg";
import sapin from "../../img/sapin.jpg";
import { Header } from "../../components/Header";



export default function Chat(){
    const [chat_state, set_chat_state] = useState([])
    const [chat_conversa, set_chat_conversa] = useState([])
    const recebeMsg = useSelector((state) => {
        return state.msg 
    })
    const dispararMensagem = useDispatch()
    function handleSubmit(e) {
        e.preventDefault()
        const chat_data = new FormData(e.target)
        const ref_chat_data = Object.fromEntries(chat_data)
        console.log(ref_chat_data)
        const envia_mensagem = {
            img: rino,
        }
        dispararMensagem(enviarMensagem(Object.assign( ref_chat_data, envia_mensagem)))
        console.log(recebeMsg)
        console.log(envia_mensagem)
        set_chat_state("")
    }
    return(
        
        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
            rel="stylesheet" 
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
            crossorigin="anonymous"/>

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"/>

            <link rel="stylesheet" href="css/styles_principal.css"/>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
    crossorigin="anonymous"> </script>

            <Header/>
            <div className="chat">
                <Container_chat chat={recebeMsg}/>
                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <textarea 
                        value={chat_state} 
                        onChange={e => set_chat_state(e.target.value)}
                        placeholder="" 
                        name="msg"
                    ></textarea>
                <input type="submit" href="#" class= "btn btn-primary" value="Enviar"/>
                </form>
            </div>
        </div>
    );
}