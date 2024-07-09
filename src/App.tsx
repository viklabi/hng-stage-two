import Header from "./Components/Header"
import Discount from "./Components/Discount"
import bg from './assets/backgrounds/hero-bg-overlay.png'
import Hero from "./Components/Hero"
import Footer from "./Components/Footer"
import ProductParent from "./Components/ProductParent"
import SideProductGroup from "./Components/SideProductGroup"
import Cart from "./Components/Cart"
import { useState } from "react"
import { products } from "./index"

interface productPropType{
  src: string,
  name: string,
  price: number,
  about: string,
  id: string
  alt: string
  quantity: number
}

const App = () => {
   const [showCart, setShowCart] = useState(true)
   const [cart, setCart] = useState<productPropType[]>([])


   const addToCart = (id: string) => {
      const product = products[products.findIndex(element => element.id === id)]
      if(product){
        if(cart.some(element => element.id == product.id)){
         const newCart = cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(newCart)
        }
        else{
        setCart(prev => [...prev, product])
        }
      }
   }
const cartLength = cart.length;

   const removeFromCart = (id: string) => {
   const product = products[products.findIndex(element => element.id === id)]
   const  newCart = cart.filter(cartItem => cartItem.id !== product.id)
   setCart(newCart)
   }

  const handleShowCart = () => setShowCart(!showCart)

  // const handleQuantityChange = (id: string, newQuantity: number) => {
  //   const product = products[products.findIndex(element => element.id === id)]


  //   if(newQuantity > 0 && newQuantity){
  //     const newCart = cart.map(item =>
  //       item.id === product.id? {...item, quantity: newQuantity } : item
  //     );
  //     setCart(newCart)
  //   }
  //   else if(newQuantity === 0){
  //     removeFromCart(id)
  //   }
  //   else{
  //     alert('Invalid quantity')
  //   }
  // }
  return (
    <div className='bg-primary pt-[22px] bg-no-repeat relative'>
      <img className="absolute z-10 top-4 h-[879px] opacity-15 left-[20%] hidden xl:block" src={bg} alt="" />
      <Header showCart={showCart} handleShowCart={handleShowCart} cartLength={cartLength}/>
      <Hero />
      {showCart ?
        <>
          <ProductParent addToCart={addToCart}/>
          <SideProductGroup />
        </>
        : <Cart cart={cart}  removeFromCart={removeFromCart}/>}
      <Discount />
      <Footer />
    </div>
  )

}
export default App