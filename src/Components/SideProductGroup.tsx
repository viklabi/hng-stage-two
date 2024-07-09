import products from '../index'

import SideProduct from "../Components/SideProduct"
interface productParentPropType {
  addToCart: (id: string) => void
}
interface productPropType {
  src: string,
  name: string,
  price: number,
  about: string,
  id: string
  quantity: number
  alt: string
}

const SideProductGroup = ({ addToCart }: productParentPropType) => {
  return (
    <div className="bg-black md:w-[217px] w-[70%] lg:w-[1000px] max-w-[90%]  lg:h-[218px] lg:relative rounded-[20px] mt-20 lg:mt-32 xl:mt-36 mx-auto p-3 px-6">
      <h2 className="text-accent mt-4 text-lg lg:absolute lg:bottom-1 lg:left-1/2 lg:-translate-x-1/2 font-abhayaMedium  mb-9">Sides to go well with your meal!</h2>
      <div className="flex items-center  flex-col gap-8 lg:flex-row lg:absolute lg:-top-10 lg:left-20 lg:right-20 lg:justify-between">
        {products.filter(product => product.about.trim() == '').map((product: productPropType) =>
          <SideProduct key={product.id} src={product.src} name={product.name} price={product.price} alt={product.alt} id={product.id} about={product.about} quantity={product.quantity} addToCart={addToCart} />
        )}
      </div>
    </div>
  )
}

export default SideProductGroup