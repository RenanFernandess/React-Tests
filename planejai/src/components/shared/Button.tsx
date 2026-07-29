import type { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  Icon?: LucideIcon;
  children?: React.ReactNode;
  className?: string;
}

const baseStyles = 'flex cursor-pointer items-center justify-center font-medium text-sm gap-2 px-4 py-3 transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50 rounded-md';

const variantStyles = {
  primary: 'bg-primary text-primary-foreground font-semibold rounded-xl',
  secondary: 'bg-secondary-button border border-border rounded-3xl',
  ghost: 'rounded-lg text-foreground',
}

export function Button({ variant = 'primary', Icon, children, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={[baseStyles, variantStyles[variant], className].join(' ')}>
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
}