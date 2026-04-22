import { CardProduto } from "@/components/CardProduto";
import { Produto } from "@/types/produto";

type ParamsPage = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProdutoIdPage({ params }: ParamsPage) {
  const { id } = await params;

  const response = await fetch(`https://api.origamid.online/produtos/${id}`);
  const jsonData = (await response.json()) as Produto;

  if (jsonData === null) {
    return <div>Produto não encontrado</div>;
  }
  return (
    <div>
      <CardProduto
        className="w-fit !px-5 !py-2 !rounded-3xl"
        nome={jsonData.nome}
        preco={jsonData.preco}
      />
    </div>
  );
}
