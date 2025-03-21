import styled from 'styled-components'

export const Overlay = styled.div`
  width: 330px;
  height: 330px;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  border: none;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
`
