import Header from "./Components/Header"
import Discount from "./Components/Discount"
import bg from '/backgrounds/hero-bg-overlay.png'
import Hero from "./Components/Hero"
import Footer from "./Components/Footer"
import ProductParent from "./Components/ProductParent"
import SideProductGroup from "./Components/SideProductGroup"
import Cart from "./Components/Cart"
import { useState, useEffect } from "react"
import products from "./index"

interface productPropType {
  src: string,
  name: string,
  price: number,
  about: string,
  id: string
  alt: string
  quantity: number
}

const App = () => {
  const [showCart, setShowCart] = useState<boolean>(true)
  const [cart, setCart] = useState<productPropType[]>([])


  const addToCart = (id: string) => {
    const product = products[products.findIndex(element => element.id === id)]
    if (product) {
      if (cart.some(element => element.id == product.id)) {
        const newCart = cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(newCart)
      }
      else {
        setCart(prev => [...prev, product])
      }
    }
  }
  const cartLength = cart.length;

  const removeFromCart = (id: string) => {
    const product = products[products.findIndex(element => element.id === id)]
    const newCart = cart.filter(cartItem => cartItem.id !== product.id)
    setCart(newCart)
  }

  const IncreaseItem = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } else {
      removeFromCart(id);
    }

  }

  const decreaseItem = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    } else {
      removeFromCart(id);
    }
  }
  const handleShowCart = () => setShowCart(!showCart);
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


  return (
    <div className='bg-primary pt-[22px] bg-no-repeat relative'>
      <img className="absolute z-10 top-10 object-fill h-[800px] w-[80%] opacity-15 left-[10%] hidden lg:block" src={bg} alt="" />
      <Header showCart={showCart} handleShowCart={handleShowCart} cartLength={cartLength} />
      <Hero />
      {showCart ?
        <>
          <ProductParent addToCart={addToCart} />
          <SideProductGroup addToCart={addToCart} />
        </>
        : <Cart cart={cart} removeFromCart={removeFromCart} IncreaseItem={IncreaseItem} decreaseItem={decreaseItem} />}
      <Discount />
      <Footer />
    </div>
  )

}
export default App