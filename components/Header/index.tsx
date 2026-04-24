import { CustomLink } from "../CustomLink";

export function Header() {
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
    </header>
  );
}
