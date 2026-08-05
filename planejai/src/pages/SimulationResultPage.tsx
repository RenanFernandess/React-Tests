import { HorizontalDivider, PageHero } from "@/components";
import { SimulationCard } from "@/components/features/SimulationResults";
import type { SimulationFormData } from "@/data/simulation";
import { calcMonthlySavings } from "@/utils/simulation";
import { CalendarClock, CreditCardIcon, Goal, Landmark, PiggyBank, Wallet } from "lucide-react";

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
  const monthlySavings = calcMonthlySavings(data);
  const formattedMonthlySavings = monthlySavings.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })

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
        <SimulationCard
          variant="primary"
          Icon={PiggyBank}
          label="Economia Mensal"
          value={formattedMonthlySavings}
          subtitle="Valor que você pode economizar mensalmente"
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="bg-card order-2 rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] lg:order-1 lg:col-span-2">
          Painel de Insights
        </div>
        <div className="order-1 flex flex-col gap-6 items-start lg:order-2 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] rounded-2xl p-6">
          <p className="mb-4 text-lg font-semibold tracking-widest uppercase text-foreground">
            Resumo das suas finanças
          </p>
          <SimulationCard
            variant="ghost"
            Icon={Wallet}
            label="Renda Mensal"
            value={data.income}
            subtitle="renda total bruta por mês"
          />
          <HorizontalDivider spacing={0} />
          <SimulationCard
            variant="ghost"
            Icon={CreditCardIcon}
            label="Custo fixo de vida"
            value={data.expenses}
            subtitle="Gastos essenciais por mês"
          />
          <HorizontalDivider spacing={0} />
          <SimulationCard
            variant="ghost"
            Icon={Landmark}
            label="Dividas / Parcelas"
            value={data.debts}
            subtitle="Valor comprometido com parcelas/depositos"
          />
        </div>
      </div>
    </main>
  )
}
