import { PageHero } from "@/components";
import { SimulationCard } from "@/components/features/SimulationResults";
import type { SimulationFormData } from "@/data/simulation";
import { CalendarClock, Goal } from "lucide-react";

const mock: SimulationFormData = {
  income: 'R$ 5.000,00',
  expenses: 'R$ 2.000,00',
  debts: 'R$ 500,00',
  goalName: 'Viagem para o Japão',
  goalAmount: 'R$ 15.000,00',
  goalDeadline: '12',
}


export function SimulationResultPage() {
  const data: SimulationFormData = mock;

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <PageHero
        title="Resultado da simulação"
        subtitle="Com base no seu perfil financeiro e objetivos."
      />
      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <SimulationCard
          Icon={Goal}
          label="Custo da Meta"
          value={data.goalAmount}
          subtitle="Viagem para o Japão"
        />
        <SimulationCard
          Icon={CalendarClock}
          label="Prazo"
          value={`${data.goalDeadline} meses`}
          subtitle="Prazo para atingir a meta"
        />
      </div>
    </main>
  )
}
