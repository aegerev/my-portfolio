import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './components/nav';
import Footer from './components/footer'
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
