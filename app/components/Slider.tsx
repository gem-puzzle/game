import { useId } from 'react'
import { useAtomValue } from 'jotai'
import { state } from '~/store'
import { changeHandler } from '~/handlers/slider'
import css from '~/styles/Slider.module.css'

export function Slider () {
  const countId = useId()
  const listId = useId()
  const { shufflesCount } = useAtomValue(state)
  const range = Array.from({ length: 7 }, (_, i) => i ? i * 5 : 1)

  return (
    <div className={css["slider"]}>
      <label htmlFor={countId}>
        Počet ťahov miešania: {shufflesCount}
      </label>

      <input
        type="range"
        min="0"
        max="6"
        id={countId}
        list={listId}
        defaultValue={Math.floor(shufflesCount / 5)}
        onChange={changeHandler}
        className="text-blue-50, accent-blue-500"
      />
      
      <datalist id={listId}>{
        range.map((v, i) => <option
          value={i}
          label={(v).toString()}
          key={v}
        />)
      }</datalist>
    </div>
  )
}
