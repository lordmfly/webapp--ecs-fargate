import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Login from './Login'
import Table from './Table'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/table" element={<Table />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
