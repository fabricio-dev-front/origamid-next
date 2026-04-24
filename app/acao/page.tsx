export default async function AcaoPage() {
  const response = await fetch("https://api.origamid.online/acoes/lua", {
    next: {
      revalidate: 5,
    },
  });
  const acao = (await response.json()) as {
    simbolo: string;
    atualizada: string;
  };

  return (
    <div>
      <h1>{acao.simbolo}</h1>
      <p>{acao.atualizada}</p>
    </div>
  );
}
