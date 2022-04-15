export function formatCurrency(value: number): string {
  const formattedValue = Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

  return formattedValue;
}
