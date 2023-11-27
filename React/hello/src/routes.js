import React, { useContext, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

// Imports dos componentes - PAGINAS
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProdutoPage from "./pages/ProdutoPage/ProdutoPage";
import ImportantePage from "./pages/ImportantePage/ImportantePage";
import MeusPedidosPage from "./pages/MeusPedidosPage/MeusPedidosPage";
import Nav from "./Componentes/Nav/Nav";
import { ThemeContext } from "./context/ThemeContext";

const Rotas = () => {
  const [theme, setTheme] = useState("light");

  function getThemeLS() {
    setTheme(
      localStorage.getItem("theme") != null
        ? localStorage.getItem("theme")
        : "light"
    );
  }

  useState();

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Nav />
        <Routes>
          <Route element={<HomePage />} path={"/"} exact />
          <Route element={<LoginPage />} path={"/login"} />
          <Route element={<ProdutoPage />} path={"/produtos"} />
          <Route element={<HomePage />} path={"*"} />
          <Route element={<ImportantePage />} path={"/importantes"} />
          <Route element={<MeusPedidosPage />} path={"/meus-pedidos"} />
        </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default Rotas;
