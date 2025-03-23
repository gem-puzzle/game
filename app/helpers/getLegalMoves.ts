export function getLegalMoves (idx: number, lastMove: number) {
  const moves = []
  const col = idx % 4
  const row = Math.floor(idx / 4)

  if (col < 3 && lastMove !== -1) moves.push(1)
  if (col > 0 && lastMove !== 1) moves.push(-1)
  if (row < 3 && lastMove !== -4) moves.push(4)
  if (row > 0 && lastMove !== 4) moves.push(-4)

  return moves
}
