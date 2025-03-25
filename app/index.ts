import '~/index.css'

import { createRoot } from 'react-dom/client'
import { Game } from '~/views/Game'

createRoot(document.getElementById('root') as HTMLElement).render(Game())
