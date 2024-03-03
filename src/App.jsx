import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { SignUpIn } from './pages/SignUpIn'
import { Details } from './pages/Details'
import { PwReset } from './pages/PwReset'
import { NotFound } from './pages/NotFound'
import { Profile } from './pages/Profile'
import { Navbar } from './components/Navbar'
import { UserProvider } from './context/UserContext'
import { AddPost } from './pages/AddPost'
import { EnergyProvider } from './context/EnergyContext'
import { SizeProvider } from './context/SizeContext'
import { HairProvider } from './context/HairContext'
import { IntellProvider } from './context/IntellContext'
import { SocialProvider } from './context/SocialContext'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <EnergyProvider>
          <SizeProvider>
            <HairProvider>
              <IntellProvider>
                <SocialProvider>
                <div>
                  <Navbar/>
                  <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='create' element={<AddPost/>}/>
                    <Route path='signupin/:type' element={<SignUpIn/>}/>
                    <Route path='details/:id' element={<Details/>}/>
                    <Route path='pwreset' element={<PwReset/>}/>
                    <Route path='profile' element={<Profile/>}/>
                    <Route path='*' element={<NotFound/>}/>
                  </Routes>
                </div>
                </SocialProvider>
              </IntellProvider>
            </HairProvider>
          </SizeProvider>
        </EnergyProvider>
      </UserProvider>
    </BrowserRouter>
  )
}
export default App
