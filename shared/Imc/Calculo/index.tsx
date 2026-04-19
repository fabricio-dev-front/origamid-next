"use client";

import { useState } from "react";

export function CalculoImc() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  function calcula() {
    const alturaMetro = Number(altura) / 100;
    const total = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2);
    setResultado(total);
  }

  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex flex-col gap-1">
        <label>Peso</label>
        <input
          placeholder="Digite seu peso:"
          className="bg-white/20 w-full px-3 py-1.5 rounded-lg"
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label>Altura</label>
        <input
          placeholder="Digite sua altura:"
          className="bg-white/20 w-full px-3 py-1.5 rounded-lg"
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>

      <p>IMC: {resultado}</p>

      <button
        onClick={() => calcula()}
        className="bg-green-500 py-1.5 w-full mt-5 rounded-xl"
      >
        Calcular
      </button>
    </div>
  );
}
