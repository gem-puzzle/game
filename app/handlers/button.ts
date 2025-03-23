import { getDefaultStore } from 'jotai'
import { produce } from 'immer'
import { state } from '~/store'
import { getLegalMoves, getRandomNumber, animate } from '~/helpers'

export async function clickHandler () {
  const store = getDefaultStore()

  let lastMove = 0
  let currentIteration = 0
  let tiles = Array.from({ length: 16 }, (_, idx) => ++idx)

  await animate(() => {
    store.set(state, prevState => produce(prevState, draft => {
      draft.isShuffling = true
      draft.isStarted = true
      draft.isSolved = false
    }))
  })

  while (currentIteration < store.get(state).shufflesCount) {
    const idx = tiles.findIndex(tile => tile === 16)
    const moves = getLegalMoves(idx, lastMove)

    lastMove = moves.length > 1
      ? moves[await getRandomNumber(moves.length - 1)] as number
      : moves[0] as number

    tiles = tiles
      .with(idx, tiles[idx + lastMove] as number)
      .with(idx + lastMove, 16)

    await animate(() => {
      store.set(state, prevState => produce(prevState, draft => {
        draft.tiles = tiles
      }))
    })

    currentIteration++
  }

  await animate(() => {
    store.set(state, prevState => produce(prevState, draft => {
      draft.isShuffling = false
    }))
  })
}
