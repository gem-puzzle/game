import styled from 'styled-components'

export const Tiles = styled.div<{ $isSolved: boolean }>`
  width: 326px;
  height: 326px;
  padding: 2px;position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
  border-radius: 0.5rem;
  background-color: #ddbfde;

  border: 5px solid ${
    props => props.$isSolved ? "#a152a3" : "#652a7b"
  };
`
