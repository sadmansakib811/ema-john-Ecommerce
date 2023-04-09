import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader= async ()=>{
 const loadedProducts = await fetch('products.json');
 const products = await loadedProducts.json();
//  shop.jsx theke kisu section pura copy kore niche boshaisi:
 const storedCart = getShoppingCart();
 const savedCart =[];
 // step-1: get id.
 for(const id in storedCart){
     // step-2: get the product by using id.
   const addedProduct = products.find(pd =>pd.id === id)
 
 // ai if ta use korsi coz prothom bar data fetch howar karone product ashar agei ai useeffect ta run hoi tokhon shob kisu empty thake but porer bar product change hoile jate abr run hoi tar jonno dependency te [product] disi
 if(addedProduct){
     // step-3: get quantity of the product
     const quantity = storedCart[id];
     addedProduct.quantity = quantity;
     savedCart.push(addedProduct);
 }
 } // uporer useState theke products er data nia ansi jate localhost a save thaka id er sathe product match kore exact product tar sob info show kora jai
//  setCart(savedCart); ei line ta lagbena
 return savedCart;
}

export default cartProductsLoader;