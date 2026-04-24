import { getCurso } from "@/types/curso";
import Link from "next/link";

type ParamsProps = {
  params: Promise<{
    curso: string;
  }>;
};

export default async function CursoPage({ params }: ParamsProps) {
  const resolvedParams = await params;
  const cursoDetails = await getCurso(resolvedParams.curso);

  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-semibold">{cursoDetails.nome}</h1>
      <div className="text-sm space-y-1">
        <p>{cursoDetails.descricao}</p>
        <p>Total de aulas: {cursoDetails.total_aulas}</p>
        <p>Total de horas: {cursoDetails.total_horas}</p>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold">Aulas:</h2>
        {cursoDetails.aulas.map((aula) => (
          <Link
            key={aula.id}
            href={`/cursos/${resolvedParams.curso}/${aula.slug}`}
            className="bg-white/5 w-fit my-0.5 px-5 py-1.5 rounded-xl cursor-pointer hover:underline"
          >
            {aula.nome}
          </Link>
        ))}
      </div>
    </div>
  );
}
