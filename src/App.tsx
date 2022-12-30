import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './components'
import { Home } from './features'

function App() {

  return (
    <BrowserRouter>
      <div className='absolute w-full'>
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
