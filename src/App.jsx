import './bootstrap.min.css'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Login from './pages/Login'
import Register from './pages/Register'
import Footer from './components/Footer'
import Auth from './pages/Auth'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/dash' element={<Dashboard/>}/>
        <Route path='/proj' element={<Projects/>}/>
        <Route path='/log' element={<Login/>}/>
        <Route path='/reg' element={<Register/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
      <Footer/>
      <ToastContainer/>
    </>
    
  )
}

export default App
