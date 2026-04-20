import { Produto } from "@/types/produto";
import { CardProduto } from "@/components/CardProduto";

export async function Serve() {
  const response = await fetch("https://api.origamid.online/produtos");
  const responseJson = (await response.json()) as Produto[];

  if (responseJson === null) {
    <div>
      <h1>PRODUTOS NAO ENCONTRADOS</h1>
    </div>;
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-white text-2xl font-medium text-center">
        Server Fetch
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {responseJson.map(({ nome, id, preco }) => (
          <ul key={id}>
            <CardProduto nome={nome} preco={preco} />
          </ul>
        ))}
      </div>
    </div>
  );
}
