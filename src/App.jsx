import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <AnimatedBackground />
        <div className="relative z-10">
          <Header />
          <Home />
        </div>
      </div>
    </Router>
  )
}

export default App

