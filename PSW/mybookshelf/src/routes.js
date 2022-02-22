import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AluguelLivros from './pages/AluguelLivros';
import CadastroUsuario from './pages/CadastroUsuario';
import DevoluçãoLivro from './pages/DevoluçãoLivro';
import LivrosAlugados from './pages/LivrosAlugados';
import Chat from './pages/Chat';
import CadastroLivro from './pages/CadastroLivro';
import ConfirmarAluguel from './pages/ConfirmacaoAluguel';
import LoginPage from './pages/Main';


export default function MainRoutes () {

    return (
        <Routes>
            <Route path="/Main" element={<AluguelLivros/>} />
            <Route path="/CadastroUsuario" element={<CadastroUsuario/>}/>
            <Route path="/DevolverLivro" element={<DevoluçãoLivro/>}/>
            <Route path="/Chat" element={<Chat/>}/>
            <Route path="/LivrosAlugados" element={<LivrosAlugados/>}/>
            <Route path="/AlugarLivro" element={<CadastroLivro/>}/>
            <Route path="/ConfirmarAluguel" element={<ConfirmarAluguel/>}/>
            <Route path="/" element={<LoginPage/>}/>
            
        </Routes>
    );
};