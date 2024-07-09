//import { cart } from '../index'
import Button from './Button'
import CartItem from './CartItem'
import phone from '../assets/phone.svg'
import formatPrice from '../Utils/formatPrice'

interface productPropType {
  src: string,
  name: string,
  price: number,
  about: string,
  id: string,
  quantity: number
  alt: string
}
interface cartPropType {
  cart: productPropType[]
  removeFromCart: (id: string) => void
  IncreaseItem: (id: string, newQuantity: number) => void
  decreaseItem: (id: string, newQuantity: number) => void
}

const Cart = ({ cart, removeFromCart, IncreaseItem, decreaseItem }: cartPropType) => {

  const cartPrices = cart.map(cartItem => +(cartItem.price * cartItem.quantity))
  const totalPrice = cartPrices.reduce((total, num) => total + num, 0)

  return (
    <div>
      <div className="flex z-20 flex-wrap w-full items-center justify-between ex:justify-center mx-auto  mt-24 gap-10 md:gap-20 lg:gap-32">
        {cart.map(cartItem =>
          <CartItem
            id={cartItem.id}
            key={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            src={cartItem.src}
            alt={cartItem.alt}
            quantity={cartItem.quantity}
            removeFromCart={removeFromCart}
            IncreaseItem={IncreaseItem}
            decreaseItem={decreaseItem}
          />)}


      </div>
      <div className='flex items-center justify-center gap-2 mt-32 mx-auto'>
        <Button type='button' onClick={() => console.log('Phone is not ready')} className='h-[50px] w-[50px] border-[#FF7F3E] border-[1.5px] rounded-[5px] grid place-items-center'>
          <img className='w-[23px]' src={phone} alt="phone" />
        </Button>

        <Button type='button' onClick={() => console.log('Checkout is not ready')} className='h-[50px] bg-[#FF7F3E] border-white border-[3px] rounded-[5px] md:min-w-[300px] w-[75%] max-w-[1000px]'>
          {`CHECKOUT ₦${formatPrice(+totalPrice.toFixed(2))}`}
        </Button>
      </div>
    </div>
  )
}

export default Cart