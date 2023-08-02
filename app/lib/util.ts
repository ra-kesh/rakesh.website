export function classNames<T extends string | undefined>(
  ...classes: T[]
): string {
  return classes.filter(Boolean).join(" ");
}
