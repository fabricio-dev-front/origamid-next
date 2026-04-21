"use client";

import { useState, useEffect } from "react";
import { Produto } from "@/types/produto";
import { CardProduto } from "@/components/CardProduto";

export function ServerClient() {
  const [dados, setDados] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const response = await fetch("https://api.origamid.online/produtos");
      const json = (await response.json()) as Produto[];
      setDados(json);

      setLoading(false);
    }

    fetchData();
  }, []);

  if (dados === null) return;
  return (
    <div className="flex flex-col gap-3">
      <p className="text-white text-2xl font-medium text-center">
        Server Client
      </p>

      {loading && <p className="text-white text-center">Carregando...</p>}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {dados.map(({ nome, preco, id }) => (
          <ul key={id}>
            <CardProduto nome={nome} preco={preco} />
          </ul>
        ))}
      </div>
    </div>
  );
}
