/*
  - Criar as rotas /produtos e /produtos/adicionar
  - Na rota /produtos, faça um fetch para https://api.origamid.online/produtos e mostre a lista de produtos
  - Na rota /produtos/adicionar, crie um formulário para adicionar um produto.
  - Crie uma server action que faz um fetch ('POST') para https://api.origamid.online/produtos
  - O 'POST' deve possuir o tipo Produto abaixo, sem id
  - Quando o produto for adicionado, revalide a rota /produtos
  - Após revalidar, redirecione para a rota /produtos
*/

export type Produto = {
  id?: string;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

export async function ProdutosIndex() {
  const response = await fetch("https://api.origamid.online/produtos", {
    next: { revalidate: 10 },
  });
  const produtos = (await response.json()) as Produto[];

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Produtos</h1>
      <ul className="list-disc list-inside">
        {produtos.map(({ nome, preco, id }) => (
          <li key={id}>
            {nome}: R${preco.toFixed(2)}
          </li>
        ))}
      </ul>
    </>
  );
}
