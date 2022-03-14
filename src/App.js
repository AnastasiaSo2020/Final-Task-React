import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import { Route, Routes } from "react-router-dom"
import Workshops from "./Pages/Workshops"
import Shop from "./Pages/Shop"
import Register from "./Pages/Register"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"
import { useState } from "react"
import Chat from "./Pages/Chat"
import TermsAndConditions from "./Pages/TermsAndConditions"

function App() {
  const [cart, setCart] = useState([])
  function AddToCart(data) {
    let existing = cart.find(c => c.title === data.title)
    if (!existing) {
      cart.push(data)
    }
    else {
      existing.quantity = data.quantity
    }
    setCart(cart)
  }
function RemoveFromCart(title)
{
  let filter = cart.filter(index => index.title !== title)
  setCart(filter)
}
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workshops" element={<Workshops AddToCart={AddToCart}  />} />
        <Route path="/shop" element={<Shop AddToCart={AddToCart} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart data={cart} RemoveFromCart={RemoveFromCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App