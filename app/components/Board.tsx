import { clsx } from 'clsx'
import { useAtomValue } from 'jotai'
import { state } from '~/store'
import { Tile } from '~/components/Tile'

export function Board () {
  const { tiles, isSolved, isShuffling } = useAtomValue(state)

  return (
    <div className={clsx("size-87.5", "p-1", "relative", "flex", "flex-wrap", "gap-1", "rounded-sm", "bg-blue-50", "border-5", [ isSolved && "border-emerald-500", !isSolved && "border-rose-500" ])}>
      {isShuffling && <div className="size-85 absolute top-0 start-0 z-1 backdrop-blur-xs" />}

      {tiles.map((tile: number) => tile === 16
        ? <div key={tile} className="size-20" />
        : <Tile key={tile} num={tile} />
      )}
    </div>
  )
}
