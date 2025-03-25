import { useAtomValue } from 'jotai'
import { state } from '~/store'
import { clickHandler } from '~/handlers/button'

export function Button () {
  const { isStarted } = useAtomValue(state)

  return (
    <button
      type="button"
      className="px-2 py-2 font-barrio rounded-sm font-bold text-blue-50 bg-blue-500 size-19"
      disabled={isStarted}
      onClick={clickHandler}
    >
      <img src="images/shuffle.svg" alt="shuffle" className="justify-self-center" />
      <span className="text-xs">Nová hra</span>
    </button>
  )
}
