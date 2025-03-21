import { useRoutes } from 'react-router'

import { Default } from '~/layouts/Default'
import { Game } from '~/views/Game'

export function Router () {
  return useRoutes([
    { Component: Default, children: [
        { path: '*', Component: Game }
      ]
    }
  ])
}
