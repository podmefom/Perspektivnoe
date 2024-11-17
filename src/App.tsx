import { Outlet } from 'react-router-dom';
import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

export default App;
