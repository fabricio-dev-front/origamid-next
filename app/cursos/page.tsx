import { getCursos } from "@/types/curso";
import Link from "next/link";

export default async function CursosPage() {
  const cursos = await getCursos();

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <p className="text-2xl font-semibold">Acesse nossos Cursos Disponíveis</p>

      <div className="flex flex-col items-center justify-center gap-3">
        {cursos.map(({ id, nome, slug }) => (
          <Link
            href={`/cursos/${slug}`}
            key={id}
            className="bg-white/5 px-5 py-1.5 rounded-xl cursor-pointer hover:underline"
          >
            {nome}
          </Link>
        ))}
      </div>
    </div>
  );
}
