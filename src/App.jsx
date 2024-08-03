
import './App.css'
import About from './Components/About'
import Blog from './Components/Blog'
import MyFooter from './Components/MyFooter'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Newsletter from './Components/Newsletter'
import Products from './Components/Products'
import Services from './Components/Services'
function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <Services/>
     <About/>
     <Products/>
     <Blog/>
     <Newsletter/>
     <MyFooter/>
  </>
    )
}

export default App
