import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Carrinho from "./pages/Carrinho";
import Biblioteca from "./pages/Biblioteca";
import Explorar from "./pages/Explorar";
import Jogo from "./pages/DetalheJogo";
import CadastrarJogo from "./pages/CadastrarJogo";
import ListaDeJogosAdmin from "./pages/ListaDeJogosAdmin";

import RequireAuth from "./RequireAuth";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/jogo" element={<Jogo />} />
        <Route path="/cadastrar-jogo" element={<CadastrarJogo />} />
        <Route path="/lista-de-jogos" element={<ListaDeJogosAdmin />} />
        <Route
          path="/perfil/:id"
          element={
            <RequireAuth>
              <Perfil />
            </RequireAuth>
          }
        />
        <Route
          path="/carrinho"
          element={
            <RequireAuth>
              <Carrinho />
            </RequireAuth>
          }
        />
        <Route
          path="/biblioteca/:id"
          element={
            <RequireAuth>
              <Biblioteca />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default Rotas;
