interface HorizontalDividerProps {
  spacing?: number;
  className?: string;
}

export function HorizontalDivider({ spacing = 16, className }: HorizontalDividerProps) {

  const styles = {
    marginTop: spacing,
    marginBottom: spacing,
  }

  return (
    <div
      style={styles}
      className={'bg-border self-stretch h-px ' + className} />
  )
}