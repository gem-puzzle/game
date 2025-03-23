import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router'
import { Game } from '~/views/Game'
import '~/index.css'

createRoot(document.querySelector('app-layout') as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route Component={Outlet}>
          <Route Component={Game} path="*" />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
