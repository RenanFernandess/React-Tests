export function formatCurrencyMask(value: string): string {
  const onlyDigits = value.replace(/\D/g, "");

  if (!onlyDigits) { return ""; }

  const numericValue = Number.parseInt(onlyDigits, 10);
  const amount = numericValue / 100;

  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function parseCurrency(value: string): number {
  const onlyDigits = value.replace(/\D/g, "");

  if (!onlyDigits) { return 0; }

  const numericValue = Number.parseInt(onlyDigits, 10);
  return numericValue / 100;
}