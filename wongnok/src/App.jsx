import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Recipes from './pages/Recipes'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'

export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>   
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/create-post' element={<CreatePost />}/>
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
        <Route path='/signin' element={<Signin />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/post/:postSlug' element={<PostPage />} />

        
      </Routes>
    </BrowserRouter>
  )
}