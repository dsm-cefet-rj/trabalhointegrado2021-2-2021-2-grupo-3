import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AluguelLivros from './pages/AluguelLivros';
import CadastroUsuario from './pages/CadastroUsuario';
import DevoluçãoLivro from './pages/DevoluçãoLivro';
import Chat from './pages/Chat';


export default function MainRoutes () {

    return (
        <Routes>
            <Route path="/" element={<AluguelLivros/>} />
            <Route path="/CadastroUsuario" element={<CadastroUsuario/>}/>
            <Route path="/DevolverLivro" element={<DevoluçãoLivro/>}/>
            <Route path="/Chat" element={<Chat/>}/>
        </Routes>
    );
};