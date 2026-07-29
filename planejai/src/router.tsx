import { PiggyBank } from "lucide-react";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout";
import { Button } from "./components/shared/Button";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <h1>Formulario de Simulação</h1>
            <Button Icon={PiggyBank}>
              clique aqui
            </Button>
          </>
        ),
      },
      {
        path: "/resultado",
        element: <h1>Resultado da Simulação</h1>,
      },
      {
        path: "/historico",
        element: <h1>Histórico de simulações</h1>,
      },
    ],
  },
]);
