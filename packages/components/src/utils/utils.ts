export function format(first?: string, middle?: string, last?: string): string {
  return (
    (first === undefined ? '' : first) +
    (middle === undefined ? '' : ` ${middle}`) +
    (last === undefined ? '' : ` ${last}`)
  )
}
