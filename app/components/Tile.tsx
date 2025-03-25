import { useAtomValue } from 'jotai'
import { clsx } from 'clsx'
import { state } from '~/store'
import { clickHandler } from '~/handlers/tile'

export function Tile ({ num }: { num: number }) {
  const { tiles } = useAtomValue(state)
  const idx = tiles.findIndex(elm => elm === num)
  const isInPlace = num === idx + 1

  const tile = [
    'size-20', 'grid', 'place-content-center', 'rounded-sm',
    'select-none', 'font-barrio', 'font-bold', 'text-3xl',
    'text-blue-50', isInPlace && 'bg-emerald-500',
    !isInPlace && 'bg-rose-500'
  ]

  return <div onClick={clickHandler} className={clsx(tile)}>
    <span className="drop-shadow-lg">{num}</span>
  </div>
}
