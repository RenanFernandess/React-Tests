import { useState } from "react";
import { simulationFormSteps } from "../../../data";
import { FormStep } from "./FormStep";
import { StepProgress } from "./Progress";

export function SimulationForm() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const stepsNumber = simulationFormSteps.length;
  const stepData = simulationFormSteps[currentStepIndex];

  const handleNextStep = () => {
    if (currentStepIndex === stepsNumber - 1) return
    setCurrentStepIndex(prevStepIndex => prevStepIndex + 1)
  }

  const handlePreviusStep = () => {
    if (currentStepIndex === 0) return
    setCurrentStepIndex(prevStepIndex => prevStepIndex - 1)
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
      />
    </>
  )
}
