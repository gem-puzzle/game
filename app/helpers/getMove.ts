export function getMove (idx: number, copy: Array<number>) {
  if (copy[idx + 4] === 16) return 4
  if (copy[idx - 4] === 16) return -4
  if (idx % 4 < 3 && copy[idx + 1] === 16) return 1
  if (idx % 4 > 0 && copy[idx - 1] === 16) return -1

  return 0
}
