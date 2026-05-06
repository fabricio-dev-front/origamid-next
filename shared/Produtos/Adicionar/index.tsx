"use client";

import { AdicionarProduto } from "@/components/Actions/adicionar-produto";
import { useFormStatus, useFormState } from "react-dom";

function Button() {
  const status = useFormStatus();

  return (
    <button type="submit" disabled={status.pending}>
      {status.pending ? "Enviando..." : "Enviar"}
    </button>
  );
}

export function AdicionarIndex() {
  const [state, formActions] = useFormState(AdicionarProduto, {
    errors: [],
  });

  return (
    <form action={formActions}>
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

      {state.errors.map((error, index) => (
        <p key={index} className="text-red-500">
          {error}
        </p>
      ))}

      <Button />
    </form>
  );
}
