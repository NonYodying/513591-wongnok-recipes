import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboad from './pages/Dashboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
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
        <Route path='/signin' element={<Signin />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/recipes' element={<Recipes />} />

        
      </Routes>
    </BrowserRouter>
  )
}