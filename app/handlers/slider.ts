import { getDefaultStore } from 'jotai'
import { produce } from 'immer'
import { state } from '~/store'

export function changeHandler (evt: React.ChangeEvent<HTMLInputElement>) {
  const store = getDefaultStore()
  const value = parseInt(evt.target.value)

  store.set(state, prevState => produce(prevState, draft => {
    draft.shufflesCount = value ? value * 5 : 1
  }))
}
