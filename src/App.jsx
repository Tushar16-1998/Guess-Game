import './App.css'
import HomePage from './pages/HomePage'
import Game from './components/Game'
import { Routes , Route } from 'react-router-dom'


function App() {

  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<Game />} />
    </Routes>
  )
}

export default App
