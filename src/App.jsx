
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Cartpage from './Pages/Cart/Cartpage'
import Loginpage from './Pages/Loginpage/Loginpage'
import Bookspage from './Pages/Books/Bookspage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signuppage from './Pages/Signup/Signuppage'
import Wishlistpage from './Pages/wishlist/Wishlistpage'


function App() {

  return (
    <>
     <BrowserRouter>
    <Routes>
    <Route path='' element={<Home/>}/>
     <Route path='Bookspage' element={<Bookspage/>}/>
     <Route path='Cartpage' element={<Cartpage/>}/>
     <Route path='About' element={<About/>}/>
     <Route path='Loginpage' element={<Loginpage/>}/>
     <Route path='Signuppage' element={<Signuppage/>}/>
     <Route path='Wishlistpage' element={<Wishlistpage/>}/>


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
