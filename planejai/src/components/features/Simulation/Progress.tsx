interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function StepProgress({ currentStep, totalSteps }: StepProgressProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-4">
      <p className="text-muted-foreground text-sm mb-2">
        Passo {currentStep} de {totalSteps}
      </p>
      <div className="bg-border h-1 w-full rounded-full overflow-hidden">
        <div
          role="progressbar"
          aria-valuenow={currentStep}
          aria-valuemin={1}
          aria-valuemax={totalSteps}
          className="bg-primary h-full rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  )
}