import { useAtomValue } from 'jotai'
import { state } from '~/store'
import { Tiles } from '~/components/Tiles'
import { Overlay } from '~/components/Overlay'
import { Spacer } from '~/components/Spacer'
import { Tile } from '~/components/Tile'

export function Board () {
  const { tiles, isSolved, isShuffling } = useAtomValue(state)

  return (
    <Tiles $isSolved={isSolved}>
      {isShuffling && <Overlay />}

      {tiles.map((tile: number) => tile === 16
        ? <Spacer key={tile} />
        : <Tile key={tile} num={tile} />
      )}
    </Tiles>
  )
}
