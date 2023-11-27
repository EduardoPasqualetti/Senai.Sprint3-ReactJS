import React, { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  function handleIncrementar() {
    setContador(contador + 1);
  }
  function handleDecrementar() {
    if (contador > 0.99) {
      setContador(contador - 1);
    }
  }
  function handleMultiplicar() {
    setContador(contador * 2);
  }
  function handleDividir() {
    setContador(contador / 2);
  }

  return (
    <>
      <h1>Contador</h1>

      <p>{contador}</p>
      <button
        onClick={() => {
          handleIncrementar();
        }}
      >
        Incrementar
      </button>
      <button
        onClick={() => {
          handleDecrementar();
        }}
      >
        Decrementar
      </button>
      <button
        onClick={() => {
          handleMultiplicar();
        }}
      >
        Multiplicar
      </button>
      <button
        onClick={() => {
          handleDividir();
        }}
      >
        Dividir
      </button>
    </>
  );
};

export default Contador;
