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

  const links = [
    { href: "/imc", label: "Calcular Imc" },
    { href: "/serveFetch", label: "Server Fetch" },
    { href: "/serverClient", label: "Server Client" },
    { href: "/produtos", label: "Produtos" },
    { href: "/login", label: "Login" },
    { href: "/cursos", label: "Cursos" },
    { href: "/acao", label: "Ações" },
    { href: "/produtosCache", label: "Produtos Cache" },
    { href: "/produtosCache/adicionar", label: "Adicionar Produto" },
  ];

  return (
    <header className="flex items-center gap-5 bg-white/5 rounded-lg p-4 mb-10 text-nowrap">
      {links.map((link) =>
        link.label === "Login" && conta.autorizado ? (
          `${conta.usuario} logado!`
        ) : (
          <CustomLink
            key={link.href}
            href={link.href}
            className="hover:text-black hover:underline"
          >
            {link.label}
          </CustomLink>
        ),
      )}
    </header>
  );
}
