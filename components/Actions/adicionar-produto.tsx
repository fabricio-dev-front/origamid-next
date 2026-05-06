"use server";

import { Produto } from "@/shared/Produtos";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function validateNome(nome: unknown) {
  return typeof nome === "string" && nome.trim() !== "";
}
function validatePreco(preco: unknown) {
  return typeof preco === "number" && preco > 1;
}

export async function AdicionarProduto(
  state: { errors: string[] },
  formData: FormData,
) {
  const produto: Produto = {
    nome: formData.get("nome") as string,
    preco: Number(formData.get("preco")),
    descricao: formData.get("descricao") as string,
    estoque: Number(formData.get("estoque")),
    importado: formData.get("importado") === "on" ? 1 : 0,
  };

  let errors = [];
  if (!validateNome(produto.nome)) {
    errors.push("Nome é obrigatório");
  }
  if (!validatePreco(produto.preco)) {
    errors.push("Preço deve ser maior que 1");
  }
  if (errors.length > 0) {
    return { errors };
  }

  try {
    const response = await fetch("https://api.origamid.online/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    });

    if (!response.ok) {
      throw new Error("Erro ao adicionar produto");
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: [error.message],
      };
    }
  }

  revalidatePath("/produtosCache");
  redirect("/produtosCache");

  return { errors: [] };
}
