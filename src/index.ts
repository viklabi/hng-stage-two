import productOne from './assets/products/product1.png';
import productTwo from './assets/products/product2.png';
import productThree from './assets/products/product3.jpeg';
import productFour from './assets/products/product4.jpeg';
import productFive from './assets/products/product5.png';
import productSix from './assets/products/product6.png';
import productSeven from './assets/products/product7.jpeg';
import productEight from './assets/products/product8.jpeg';
import productNine from './assets/products/product9.png';


interface productPropType{
  src: string,
  name: string,
  price: number,
  about: string,
  id: string
  quantity: number
  alt: string
}


const products: productPropType[] = [
  { id: 'fjjkjjhfkjorjfhi', name: 'Double Cheeseburger', price: 388753, quantity: 1, src:productOne, about: 'It  features two (2) pure all beef patties topped with tangy pickles, chopped onions, ketchup, mustard, and two melty American cheese slices.', alt:'' },

  { id: 'wyyepodklsdjfasjd', name: 'Chicken Sandwich', price: 269838, quantity: 1, src:productTwo, about: 'Crispy coated chicken with lettuce and our sandwich sauce ,in a soft sesame-topped bun.', alt:'' },

  { id: 'sfjhpnoasjjkljos', name: 'Sausage Burrito', price: 196415, quantity: 1, src:productThree, about: "McDonald's Sausage Burrito is a delicious breakfast burrito with fluffy eggs & pork sausage.",alt:''  },

  { id: 'dfjnkfjknkdkskdi', name: 'Hamburgers', price: 196415, quantity: 1, src:productFour, about: "McDonald's Sausage Burrito is a delicious breakfast burrito with fluffy eggs & pork sausage.",alt:''  },

  { id: 'hddsiodfjhskdjkj', name: 'Sausage Biscuit', price: 180000, quantity: 1, src:productFive, about: "McDonald's Sausage Biscuit is the perfect sausage breakfast sandwich to start your day! ",alt:''  },

  { id: 'dhjksdjkljkdhjks', name: 'Hash Browns', price: 1250000, quantity: 1, src:productSix, about: 'Crispy, homemade hash browns are quick, easy, and family-friendly, making them perfect as a side dish for any breakfast or brunch.',alt:''  },


  { id: 'ejiwdxzldksdjwp;', name: 'Chicken nuggets', price: 78000, quantity: 1, src:productSeven, about:'',alt:'' },
  { id: 'kdjknnmnmfnmvnkk', name: 'Fries', price: 98000, quantity: 1, src:productEight, about: '',alt:'' },
  { id: 'fjdlskjkljkklkjd', name: 'Drink', price: 55000, quantity: 1, src:productNine, about: '' ,alt:''  },
]

const cart = [
  { id: 'fjjkjjhfkjorjfhi', name: 'Double Cheeseburger', price: 388753, quantity: 1, src:productOne, alt:'' },

  { id: 'wyyepodklsdjfasjd', name: 'Chicken Sandwich', price: 269838, quantity: 1, src:productTwo,  alt:'' },

  { id: 'sfjhpnoasjjkljos', name: 'Sausage Burrito', price: 196415, quantity: 1, src:productThree,alt:''  },

  { id: 'dfjnkfjknkdkskdi', name: 'Hamburgers', price: 196415, quantity: 1, src:productFour, alt:''  },

  { id: 'hddsiodfjhskdjkj', name: 'Sausage Biscuit', price: 180000, quantity: 1, src:productFive, alt:''  },
]


export { products, cart }