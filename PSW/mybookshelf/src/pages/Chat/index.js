import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { enviarMensagem } from "../../store/slices/chatSlice";
import Container_chat from "../../components/Container_chat";
import rino from "../../img/rino.jpg";
import { Header } from "../../components/Header";
import { carregarMensagem } from "../../store/slices/chatSlice.js"
import axios from "axios"

var cont = 0
async function pegaDados(token) {
    if (cont == 0) {
        try {
            const response = axios.get('http://localhost:3000/Chat',{
                headers: {
                  'Authorization': 'Bearer '+ token,
                }
            })
            cont += 1;
            return (await response).data.mensagem
        }
        catch (error) {
            console.error(error);
        }

    }
}


export default function Chat() {
    const [chat_state, set_chat_state] = useState([])
    const [chat_conversa, set_chat_conversa] = useState([])
    const token = useSelector(state => state.login.token)
    const dispararMensagem = useDispatch()
    pegaDados(token).then(response => {
        dispararMensagem(carregarMensagem(response))
    })
    const recebeMsg = useSelector(state => state.msg)

    function handleSubmit(e) {
        e.preventDefault()
        const chat_data = new FormData(e.target)
        const ref_chat_data = Object.fromEntries(chat_data)
        console.log(ref_chat_data)
        const envia_mensagem = {
            img: rino,
        }
        axios.post('http://localhost:3000/Chat/enviarMsg', {
            destinatarioID: "teste1",
            msg: ref_chat_data.msg, img: rino
        }, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
        dispararMensagem(enviarMensagem(Object.assign(ref_chat_data, envia_mensagem)))
        console.log(recebeMsg)
        console.log(envia_mensagem)
        set_chat_state("")
    }
    return (

        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossorigin="anonymous" />

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />

            <link rel="stylesheet" href="css/styles_principal.css" />

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossorigin="anonymous"> </script>

            <Header />
            <div className="chat">
                <p className="Chat_title">Chat My Bookshelf</p>
                <Container_chat chat={recebeMsg} />
                <form onSubmit={(e) => { handleSubmit(e) }}>
                    <textarea
                        value={chat_state}
                        onChange={e => set_chat_state(e.target.value)}
                        placeholder=""
                        name="msg"
                    ></textarea>
                    <input type="submit" href="#" class="btn btn-primary" value="Enviar" />
                </form>
            </div>
        </div>
    );
}