import { BrowserRouter } from 'react-router-dom'
import { Cover } from './components/Cover'

import { Router } from './Router'

export const App = () => {
  return (
    <BrowserRouter>
      <Cover />
      <Router />
    </BrowserRouter>
  )
}
