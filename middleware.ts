/*
  middleware é um recurso do Next.js que permite executar código antes de uma solicitação ser processada. 
  
  Ele é útil para autenticação, autorização, redirecionamento e outras tarefas que precisam ser realizadas antes de acessar uma rota específica.

  é uma forma de proteger rotas específicas, garantindo que apenas usuários autenticados possam acessá-las.

  No exemplo acima, a função middleware verifica se o cookie "token" está presente na solicitação. Se o token estiver presente, a solicitação é permitida a continuar normalmente. Caso contrário, o usuário é redirecionado para a página de login.
*/

import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (token) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/cursos",
};
