import { simulationFormSteps } from "@/data";
import type { SimulationFormData } from "@/data/simulation";
import { useSimulationStorage } from "@/hooks/useSimulationStorege";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormStep } from "./FormStep";
import { StepProgress } from "./Progress";

export function SimulationForm() {
  const navegate = useNavigate();
  const [saveFormData] = useSimulationStorage();
  const [formData, setFormData] = useState<SimulationFormData>({});
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const stepsNumber = simulationFormSteps.length;
  const stepData = simulationFormSteps[currentStepIndex];

  const handleNextStep = (inputValue: string) => {
    const updatedFormData = { ...formData, [stepData.id]: inputValue };

    if (currentStepIndex === stepsNumber - 1) {
      saveFormData(updatedFormData);
      navegate('/resultado');
      return;
    }
    setCurrentStepIndex(prevStepIndex => prevStepIndex + 1)
    setFormData(updatedFormData)
  }

  const handlePreviusStep = () => {
    if (currentStepIndex === 0) return
    setCurrentStepIndex(prevStepIndex => prevStepIndex - 1)
  }

  const inputPropsWithValue = {
    ...stepData.inputProps,
    value: formData[stepData.id] || ''
  }

  return (
    <>
      <StepProgress currentStep={currentStepIndex + 1} totalSteps={stepsNumber} />
      <FormStep
        key={stepData.id}
        onBack={handlePreviusStep}
        onNext={handleNextStep}
        hideBackButton={currentStepIndex === 0}
        {...stepData}
        inputProps={inputPropsWithValue}
      />
    </>
  )
}
