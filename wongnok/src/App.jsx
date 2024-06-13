import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboad from './pages/Dashboard'
import Singin from './pages/Singin'
import Singup from './pages/Singup'
import Recipes from './pages/Recipes'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/dashboad' element={<Dashboad />}/>
        <Route path='/singin' element={<Singin />}/>
        <Route path='/singup' element={<Singup />}/>
        <Route path='/recipes' element={<Recipes />} />

        
      </Routes>
    </BrowserRouter>
  )
}