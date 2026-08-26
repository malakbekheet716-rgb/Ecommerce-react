//consumer of cartContext, it doesn't managed cart heya bta5od data and functions needed
import {useCart} from "../context/CartContext";

export default function Checkout(){
    const {
    getCartItemsWithProducts,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart,
   } = useCart();//btgyb el values HAA

    const cartItems = getCartItemsWithProducts();//dy el gabt hagt el product kolo fa tb3n gably el name fa hyb2a maktob 
    const total = getCartTotal();

    function placeOrder() {
    alert("Successful Order!");
    clearCart();
   }
   return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Checkout</h1>
        <div className="checkout-container">
          <div className="checkout-items">
            <h2 className="checkout-section-title">Order Summary</h2>
            {cartItems.map((item) => (//hatmsk kol item w t3ml el template dy
              <div className="checkout-item" key={item.id}>
                <img
                  src={item.product.image}//mynfa3sh item.img ma om el item 3obara 3an zeft id w quantity fa lzem 2rg3 lel 2sl
                  alt={item.product.name}
                  className="checkout-item-image"
                />
                <div className="checkout-item-details">
                  <h3 className="checkout-item-name">{item.product.name}</h3>
                  <p className="checkout-item-price">
                    ${item.product.price} each
                  </p>
                </div>
                <div className="checkout-item-controls">
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)} >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)} >
                      +
                    </button>
                  </div>

                  <p className="checkout-item-total">
                    ${(item.product.price * item.quantity).toFixed(2)}{/*2 decimal points y3ny */}
                  </p>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => removeFromCart(item.id)} >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="checkout-summary">
            <h2 className="checkout-section-title">Total</h2>
            <div className="checkout-total">
              <p className="checkout-total-label">Subtotal:</p>
              <p className="checkout-total-value">${total.toFixed(2)}</p>
            </div>
            <div className="checkout-total">
              <p className="checkout-total-label">Total:</p>
              <p className="checkout-total-value checkout-total-final"> ${total.toFixed(2)} </p>
            </div>
            <button
              className="btn btn-primary btn-large btn-block" onClick={placeOrder} >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
