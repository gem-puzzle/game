import { useAtomValue } from 'jotai'
import { clsx } from 'clsx'
import { state } from '~/store'
import { Tile } from '~/components/Tile'

export function Board () {
  const { tiles, isSolved, isShuffling } = useAtomValue(state)

  const boardStyle = [
    'size-87.5', 'p-1', 'relative', 'flex', 'flex-wrap', 'gap-1',
    'rounded-sm', 'bg-blue-50', 'border-5',
    isSolved && 'border-emerald-500', !isSolved && 'border-rose-500'
  ]

  const overlayStyle = [
    'size-85', 'absolute', 'top-0', 'start-0', 'backdrop-blur-xs'
  ]

  const spacerStyle = ['size-20']

  return (
    <div className={clsx(boardStyle)}>
      {isShuffling && <div className={clsx(overlayStyle)} />}

      {tiles.map((tile: number) => tile === 16
        ? <div key={tile} className={clsx(spacerStyle)} />
        : <Tile key={tile} num={tile} />
      )}
    </div>
  )
}
