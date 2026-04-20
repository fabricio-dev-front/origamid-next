import { Produto } from "@/types/produto";

export function CardProduto({ nome, preco }: Produto) {
  return (
    <div className="border border-white/5 px-3 py-1 rounded-md m-1.5 cursor-pointer flex items-center justify-between">
      <p className="font-normal text-base">{nome}</p>
      <p className="font-normal text-green-500 text-base">R$ {preco}</p>
    </div>
  );
}
