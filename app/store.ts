import { atom } from 'jotai'

interface IState {
  tiles: Array<number>
  shufflesCount: number
  isShuffling: boolean
  isStarted: boolean
  isSolved: boolean
}

export const state = atom<IState>({
  tiles: Array.from({ length: 16 }, (_, idx) => ++idx),
  shufflesCount: 20,
  isShuffling: false,
  isStarted: false,
  isSolved: true
})
