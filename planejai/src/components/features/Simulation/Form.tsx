import { PiggyBank } from "lucide-react";
import { FormStep } from "./FormStep";
import { StepProgress } from "./Progress";

export function SimulationForm() {
  return (
    <>
      <StepProgress currentStep={1} totalSteps={5} />
      <FormStep
        Icon={PiggyBank}
        title="Simulação"
        question="Qual é o valor do seu investimento?"
        inputProps={{
          type: "text",
          placeholder: "ex: 5.000,00",
          prefix: "R$",
        }}
      />
    </>
  )
}
