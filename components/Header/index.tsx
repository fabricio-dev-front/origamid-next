import { CustomLink } from "../CustomLink";

export function Header() {
  return (
    <header>
      <CustomLink href="/imc" className="hover:text-white hover:underline">
        Calcular Imc
      </CustomLink>
    </header>
  );
}
