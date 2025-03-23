import { useAtomValue } from 'jotai'
import { state } from '~/store'
import { clickHandler } from '~/handlers/tile'

const Square = div<{ $isInPlace: boolean }>`
  width: 80px;
  height: 80px;
  display: grid;
  place-content: center;
  border-radius: 0.5rem;
  font-family: Barrio;
  font-size: 2rem;
  font-size: 4rem;
  font-weight: 700;
  color: #f9f9f9;
  -webkit-user-select: none;
  user-select: none;

  background-color: ${
    props => props.$isInPlace ? "#85358d" : "#652a7b"
  };
`

export function Tile ({ num }: { num: number }) {
  const { tiles } = useAtomValue(state)
  const idx = tiles.findIndex(elm => elm === num)
  const isInPlace = num === idx + 1

  return <Square $isInPlace={isInPlace} onClick={clickHandler}>{num}</Square>
}
