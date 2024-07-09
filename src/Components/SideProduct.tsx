import Button from "./Button"
import formatPrice from '../Utils/formatPrice';
interface productPropType{
  src: string,
  name: string,
  price: number,
  about: string,
  id: string
  quantity: number
  alt: string
  addToCart: (id:string) => void
}

const SideProduct = ({src, name, price, alt,  addToCart, id}: productPropType) => {
  const handleAddToCart = () => {
    addToCart(id);
  };
  return (
    <div>
      <div className="relative mb-2">
        <img className='w-[100px] h-[100px] rounded-full' src={src} alt={alt} /> 
        <Button children='Buy now' type='button' onClick={handleAddToCart} className='text-primary absolute top-1/2 -translate-y-1/2 -right-2 bg-accent text-[13] lg:text-base font-abhayaMedium rounded-full w-[65px] lg:w-20 h-[20px] lg:h-[25px]'></Button>
        </div>
        <h2 className="text-accent font-abhayaMedium text-lg text-center">{name}</h2>
        <p className=" text-accent font-abhayaMedium text-center h-5 text-[13px] lg:text-base">{`₦${formatPrice(price)}`}</p>
    </div>
  )
}

export default SideProduct
