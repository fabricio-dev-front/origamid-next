"use client";

import { redirect } from "next/navigation";
import { Produto } from "..";
import { AdicionarProduto } from "@/components/Actions/adicionar-produto";

export function AdicionarIndex() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data: Produto = {
      nome: event.currentTarget.nome.value,
      preco: Number(event.currentTarget.preco.value),
      descricao: event.currentTarget.descricao.value,
      estoque: Number(event.currentTarget.estoque.value),
      importado: event.currentTarget.importado.checked ? 1 : 0,
    };

    await AdicionarProduto(data);

    redirect("/produtosCache");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="preco">Preço</label>
        <input type="number" id="preco" name="preco" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="descricao">Descrição</label>
        <textarea id="descricao" name="descricao"></textarea>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="estoque">Estoque</label>
        <input type="number" id="estoque" name="estoque" />
      </div>

      <div className="flex items-center mb-3">
        <label htmlFor="importado">Importado</label>
        <input type="checkbox" id="importado" name="importado" />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
