import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Post } from './pages/Post'
import { SignUpIn } from './pages/SignUpIn'
import { Details } from './pages/Details'
import { PwReset } from './pages/PwReset'
import { NotFound } from './pages/NotFound'
import { Profile } from './pages/Profile'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='update' element={<Post/>}/>
          <Route path='signupin' element={<SignUpIn/>}/>
          <Route path='details/:id' element={<Details/>}/>
          <Route path='pwreset' element={<PwReset/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App
