import { cookies } from "next/headers";
import { CustomLink } from "../CustomLink";

type Conta = {
  autorizado: boolean;
  usuario: string;
};

export async function Header() {
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

  return (
    <header className="flex items-center gap-5 bg-white/5 rounded-lg p-4 mb-10">
      <CustomLink href="/imc" className="hover:text-white hover:underline">
        Calcular Imc
      </CustomLink>
      <CustomLink
        href="/serveFetch"
        className="hover:text-white hover:underline"
      >
        Server Fetch
      </CustomLink>
      <CustomLink
        href="/serverClient"
        className="hover:text-white hover:underline"
      >
        Server Client
      </CustomLink>
      <CustomLink href="/produtos" className="hover:text-white hover:underline">
        Produtos
      </CustomLink>
      <CustomLink href="/cursos" className="hover:text-white hover:underline">
        Cursos
      </CustomLink>
      <CustomLink href="/acao" className="hover:text-white hover:underline">
        Ações
      </CustomLink>
      {conta.autorizado ? (
        <span>Olá, {conta.usuario}!</span>
      ) : (
        <CustomLink href="/login" className="hover:text-white hover:underline">
          Login
        </CustomLink>
      )}
    </header>
  );
}
