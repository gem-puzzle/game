import { useAtomValue } from 'jotai'
import { state } from '~/store'
import { clickHandler } from '~/handlers/button'
import css from '~/styles/Button.module.css'

export function Button () {
  const { isStarted } = useAtomValue(state)

  return (
    <button
      type="button"
      className={css["button"]}
      disabled={isStarted}
      onClick={clickHandler}
    >
      <img src="images/shuffle.svg" alt="shuffle" />
      Nová hra
    </button>
  )
}
