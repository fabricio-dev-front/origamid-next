import { getCursos } from "@/types/curso";
import Link from "next/link";

export default async function CursosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cursos = await getCursos();

  return (
    <div className="flex items-center lg:flex-row flex-col gap-10">
      <div className="flex flex-col items-center justify-center">
        {cursos.map(({ id, nome, slug }) => (
          <Link
            href={`/cursos/${slug}`}
            key={id}
            className="bg-black/5 text-nowrap px-5 rounded-xl cursor-pointer hover:underline"
          >
            {nome}
          </Link>
        ))}
      </div>

      <div className="w-full items-center flex justify-center">{children}</div>
    </div>
  );
}
