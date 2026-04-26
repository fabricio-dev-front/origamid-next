/*
    EXPLICAÇÃO:

    - O arquivo `route.ts` é um arquivo de rota para a API. Ele define um endpoint GET que faz uma requisição para a URL "https://api.origamid.online/vendas" com um cabeçalho de autenticação (apikey). A resposta da requisição é convertida para JSON e retornada como resposta da API.
*/

export async function GET() {
  const response = await fetch("https://api.origamid.online/vendas", {
    headers: {
      apikey: process.env.APIKEY_ROUTE_HANHLERS_1 || "",
    },
  });

  const data = await response.json();

  return Response.json(data);
}
