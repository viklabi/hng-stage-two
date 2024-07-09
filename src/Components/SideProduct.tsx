interface productPropType{
  src: string,
  name: string,
  price: number,
  about: string,
  id: string
  quantity: number
  alt: string
}

const SideProduct = ({src, name, price, alt}: productPropType) => {
  return (
    <div>
      <div className="relative mb-2">
        <img className='w-[100px] h-[100px] rounded-full' src={src} alt={alt} /> 
        <p className="absolute top-1/2 -translate-y-1/2 -right-2 text-primary bg-accent rounded-full w-[65px] h-5 text-[13px] text-center">{price}</p>
        </div>
        <h2 className="text-accent font-abhayaMedium text-lg text-center">{name}</h2>
    </div>
  )
}

export default SideProduct
