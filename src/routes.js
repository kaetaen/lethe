import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import About from './pages/About'

function AppRoutes () {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
