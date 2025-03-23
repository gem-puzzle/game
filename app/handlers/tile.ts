import { getDefaultStore } from 'jotai'
import { produce } from 'immer'
import { state } from '~/store'
import { getMove, isSorted, animate } from '~/helpers'

export async function clickHandler (evt: React.MouseEvent) {
  const store = getDefaultStore()
  const { tiles, isStarted } = store.get(state)
  const target = evt.target as HTMLDivElement
  const num = parseInt(target.textContent!, 10)
  const pattern = [75, 125, 75, 25, 75, 25, 300]
  const idx = tiles.findIndex(elm => elm === num)
  const move = getMove(idx, tiles)
  const copy = tiles.with(idx, 16).with(idx + move, num as number)
  const solved = isSorted(copy)

  if (isStarted && move) {
    navigator.vibrate(30)
    target.style.viewTransitionName = 'tile'

    await animate(() => {
      store.set(state, prevState => produce(prevState, draft => {
        draft.tiles = [...copy]
        draft.isSolved = solved
        draft.isStarted = !solved
      }))
    })

    target.style.viewTransitionName = ''
    if (solved) navigator.vibrate(pattern)
  }
}
