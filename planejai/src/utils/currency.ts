export function formatCurrencyMask(value: string): string {
  const onlyDigits = value.replace(/\D/g, "");

  if (!onlyDigits) { return ""; }

  const numericValue = Number.parseInt(onlyDigits, 10);
  const amount = numericValue / 100;

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}
