import { cookies } from "next/headers";

type Conta = {
  autorizado: boolean;
  usuario: string;
};

export default async function Home() {
  const token = (await cookies()).get("token")?.value;

  let conta: Conta = {
    autorizado: false,
    usuario: "",
  };

  const response = await fetch("https://api.origamid.online/conta/perfil", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    conta = (await response.json()) as Conta;
  }

  return <div>Bem vindo, {conta.usuario}!</div>;
}
