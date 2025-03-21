export function isSorted (tiles: Array<number>) {
  return tiles.every(
    (val, idx, arr) => idx === 0 || val >= arr[idx - 1]!
  )
}
