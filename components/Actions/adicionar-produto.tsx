"use server";

import { Produto } from "@/shared/Produtos";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function AdicionarProduto(produto: Produto) {
  const response = await fetch("https://api.origamid.online/produtos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(produto),
  });

  await response.json();

  revalidatePath("/produtosCache");
  redirect("/produtosCache");
}
