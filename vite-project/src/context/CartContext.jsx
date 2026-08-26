//el page bt3t el cart w provides functions akueed that other comp can use to change it
import { createContext, useState, useContext } from "react";//e7na 3arfyn b2a createcontext to create a shared place zy auth keda
import { getProductById } from "../data/products";

const CartContext = createContext(null);

export default function CartProvider({ children }) {{/*childeren dy 2y haga btb2a wrapped bl authProvider */}
    const [cartItems, setCartItems] = useState([]);//fy el 2wel empty cart akyeed w keep in mind it stores id w quantity bas
     //aho by5od el id fy next line not the whole obj


    function addToCart(productId){
         const existing = cartItems.find((item) => item.id === productId);//nfss el zeft checking  if it exists in the cart
    if (existing) {
      const currentQuantity = existing.quantity; //exixting gowa el truthy obj y3ny el fy el cart
      const updatedCartItems = cartItems.map((item) => // b3den with map b2a y go through each w law wa7d fyhom el e7na bnzwdo y ++ el quantity
        item.id === productId
          ? { id: productId, quantity: currentQuantity + 1 }
          : item
      );
      setCartItems(updatedCartItems);
    } else {//spread operator copy w y add el gdyd 
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
    }
  }

  function getCartItemsWithProducts() {
    return cartItems
      .map((item) => ({
        ...item,
        product: getProductById(item.id),//dy btro7 tgly b2t 2shy2o w tgy 3ashan e7na 2olna CARTTT gowaha id w quantity bas bas ma ana 3yza ashof bardo
      }))
      .filter((item) => item.product);//filter tab3an 3ashan law fy item msh product asln Y3NY EHHH -> 3ADY MASLN LAW kan fy product w 2tms7 mn products details
  }

  function removeFromCart(productId) {
    setCartItems(cartItems.filter((item) => item.id !== productId));//3yza a remove item fa as long as in el id msh = lel product hasybo once === harmyh
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {//lw quantity 22l mn 0 2w 0 hy remove 
      removeFromCart(productId);
      return;//break
    }//then if... updating b2a
    setCartItems(
      cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  }

  function getCartTotal() {//total price, reduce btlmhomly fy 1 
    const total = cartItems.reduce((total, item) => {
      const product = getProductById(item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);//start total at 0 
    return total;
  }

  function clearCart() {
    setCartItems([]);
  }

  return (//making them available to every comp wrapped by cartcontext
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        getCartItemsWithProducts,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

//creates own custom hook , badl ma 23od aktb kol shwya useContext(CartContext)
export function useCart() {
  const context = useContext(CartContext);
  //nafs el haga hat3ml pass ly kol ely fy value fo2
  return context;
}
