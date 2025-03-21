import { Outlet } from 'react-router'
import { createGlobalStyle } from 'styled-components'

const Layout = createGlobalStyle`
  html {
    height: 100%;
    font-size: 62.5%;
  }

  body {
    height: 100%;
    margin: 0;
    font-size: 1.6rem;
    background-color: #4b2168;
  }

  body > app-layout {
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
  }

  ::view-transition-group(*) {
    animation-timing-function: linear;
    animation-duration: 166ms;
  }
`

export function Default () {
  return <>
    <Layout />
    <Outlet />
  </>
}
