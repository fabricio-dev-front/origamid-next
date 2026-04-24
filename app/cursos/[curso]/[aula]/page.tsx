import { getAula } from "@/types/curso";
import Link from "next/link";

type ParasmsProps = {
  params: Promise<{
    curso: string;
    aula: string;
  }>;
};

export default async function AulaPage({ params }: ParasmsProps) {
  const resolvedParams = await params;
  const aula = await getAula(resolvedParams.curso, resolvedParams.aula);

  return (
    <div>
      <Link
        href={`/cursos/${resolvedParams.curso}`}
        className=" p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors hover:underline"
      >
        Voltar
      </Link>
      <h1 className="text-4xl font-semibold mt-10">{aula.nome}</h1>
      <p className="text-sm mt-2">{aula.descricao}</p>
      <p className="text-sm mt-1">Tempo: {aula.tempo} minutos</p>
    </div>
  );
}
