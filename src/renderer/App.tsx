import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'
import MainPage from 'components/MainPage'
import './App.css'

const Hello = () => {
  return (
    <div>
      <MainPage />
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  )
}

export default App
