import { RootLayout } from "@/components";
import { SimulationFormPage, SimulationResultPage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <SimulationFormPage />,
      },
      {
        path: "/resultado/:id",
        element: <SimulationResultPage />,
      },
      {
        path: "/historico",
        element: <h1>Histórico de simulações</h1>,
      },
    ],
  },
]);
