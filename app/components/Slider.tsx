import { useId } from 'react'
import { useAtomValue } from 'jotai'
import { state } from '~/store'
import { changeHandler } from '~/handlers/slider'
import clsx from 'clsx'

export function Slider () {
  const countId = useId()
  const listId = useId()
  const { shufflesCount } = useAtomValue(state)
  const range = Array.from({ length: 7 }, (_, i) => i ? i * 5 : 1)

  const sliderStyle = [
    'flex', 'flex-col', 'grow', 'justify-center',
    'font-barrio', 'font-bold', 'tracking-wide', 'text-blue-50'
  ]

  return (
    <div className={clsx(sliderStyle)}>
      <label htmlFor={countId}>
        <span className="text-lg">POČET ŤAHOV MIEŠANIA: {shufflesCount}</span>
      </label>

      <input
        type="range"
        min="0"
        max="6"
        id={countId}
        list={listId}
        defaultValue={Math.floor(shufflesCount / 5)}
        onChange={changeHandler}
        className="p-1 text-blue-50, accent-blue-500"
      />
      
      <datalist id={listId} className="flex flex-col justify-between vertical-lr">
        {range.map((v, i) => <option
          value={i}
          label={(v).toString()}
          key={v}
          className="origin-center -rotate-90 font-bold text-center"
        />)}
      </datalist>
    </div>
  )
}
