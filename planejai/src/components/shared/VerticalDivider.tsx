interface VerticalDividerProps {
  spacing?: number;
  className?: string;
}

export function VerticalDivider({ spacing = 16, className }: VerticalDividerProps) {

  const styles = {
    marginLeft: spacing,
    marginRight: spacing,
  }

  return (
    <div
      style={styles}
      className={'bg-border self-stretch w-px ' + className} />
  )
}