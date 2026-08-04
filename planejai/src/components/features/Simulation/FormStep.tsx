import { ArrowLeft, ArrowRight, type LucideIcon } from "lucide-react";
import { useState, type SyntheticEvent } from "react";
import { formatCurrencyMask } from "../../../utils/currency";
import { Button, Input, type InputProps } from "../../shared";

export interface FormStepProps {
  id: string;
  Icon: LucideIcon;
  title: string;
  question: string;
  inputProps: InputProps;
  submitButtonProps?: {
    label: string;
    emojiIcon: string;
  }
}

interface ActionsButtonsProps {
  onBack: () => void;
  onNext: (iputValue: string) => void;
  hideBackButton: boolean
}

export function FormStep({
  Icon,
  title,
  question,
  inputProps,
  submitButtonProps,
  hideBackButton,
  onBack,
  onNext
}: FormStepProps & ActionsButtonsProps) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputValue) return
    onNext(inputValue)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (inputProps.prefix === 'R$') {
      const formattedValue = formatCurrencyMask(e.target.value);
      setInputValue(formattedValue);
      return
    }
    setInputValue(e.target.value)
  }

  return (
    <div className="bg-card rounded-2xl p-6 shadow-[4px_4px_18px_0px_rgba(0,0,0,0.2)] sm:p-8">
      <div className="bg-primary mb-4 flex h-15 w-15 items-center justify-center rounded-xl">
        <Icon size={32} className="text-primary-foreground" />
      </div>
      <h2 className="text-primary uppercase text-xs mb-1 font-semiblod tracking-widest">{title}</h2>
      <h3 className="text-foreground text-xl mb-6 leading-sun font-semibold sm:text-2xl">{question}</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          {...inputProps}
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          {
            !hideBackButton && (
              <Button
                type="button"
                Icon={ArrowLeft}
                variant="ghost"
                className="order-2 flex-1 justify-center rounded-xl py-3 sm:order-1"
                onClick={onBack}
              >
                Voltar
              </Button>
            )
          }
          <Button
            type="submit"
            variant="primary"
            className="order-1 flex-1 sm:order-2"
            disabled={!inputValue}
          >
            {
              submitButtonProps
                ? (<>{submitButtonProps.emojiIcon} {submitButtonProps.label}</>)
                : (<>Próximo {<ArrowRight size={20} />}</>)
            }
          </Button>
        </div>
      </form>
    </div>
  )
}
