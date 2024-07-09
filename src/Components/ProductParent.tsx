import Product from "../Components/Product"
import products from '../index'

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
const ProductParent = ({ addToCart }: productParentPropType) => {
  return (
    <div className="grid z-20 grid-cols-1 ex:grid-cols-2 lg:grid-cols-3 mt-20 gap-10 lg:gap-20 lg:mt-28">
      {products.filter(product => product.about.trim() !== '').map((product: productPropType) =>
        <Product key={product.id} id={product.id} src={product.src} name={product.name} price={product.price} about={product.about} addToCart={addToCart} quantity={product.quantity} alt={product.alt} />
      )}
    </div>
  )
}

export default ProductParent