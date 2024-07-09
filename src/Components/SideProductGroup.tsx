import { products } from '../index'

import SideProduct from "../Components/SideProduct"

interface productPropType {
  src: string,
  name: string,
  price: number,
  about: string,
  id: string
  quantity: number
}

 const SideProductGroup = () => {
  return (
    <div className="bg-black md:w-[217px] w-[70%] lg:w-[1000px] lg:h-[218px] lg:relative rounded-[20px] mt-20 lg:mt-32 xl:mt-36 mx-auto p-3 px-6  skew-x-3 -skew-y-3 lg:skew-x-0 lg:skew-y-0">
      <h2 className="text-accent mt-4 text-lg lg:absolute lg:bottom-1 lg:left-1/2 lg:-translate-x-1/2 font-abhayaMedium -skew-x-3 skew-y-3 lg:skew-x-0 lg:skew-y-0 mb-9">Sides to go well with your meal!</h2>
      <div className="flex items-center  flex-col gap-8 lg:flex-row lg:absolute lg:-top-10 lg:left-20 lg:right-20 lg:justify-between -skew-x-3 skew-y-3 lg:skew-x-0 lg:skew-y-0">
        {products.filter(product => product.about.trim() == '').map((product: productPropType) =>
          <SideProduct key={product.id} src={product.src} name={product.name} price={product.price} />
        )}
      </div>
    </div>
  )
}

export default SideProductGroup