import {Link} from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({product}){// 3amlt pass lel obj el howa product bhgto b2a 
  const {addToCart, cartItems} = useCart();
  const productInCart = cartItems.find((item) => item.id===product.id);//btshofo mtnyl fy el cart wala l2

  const productQuantityLabel = productInCart//if product exist in cart show quantity lw l2 empty
   ?`(${productInCart.quantity})`
    : "";

  return(
    <div className="product-card">
        <img src={product.image} alt={product.name} className ="product-card-image"/>
            <div className="product-card-content">
                <h3 className ="product-card-name">{product.name}</h3>
                <p className ="product-card-price">${product.price}</p>
                <div className ="product-card-actions">
                    <Link className ="btn btn-secondary" to={`/products/${product.id}`}>View Details</Link>
                    {/*btrg3ny lel detailspage of this product */}
                    <button 
                     className ="btn btn-primary"
                     onClick={() => addToCart(product.id)}> {/*b2olo add product 5 el how el id bt3o */}
                      Add to Cart {productQuantityLabel}{/*w el quantity bt3to */}
                    </button>
                </div>
            </div>
    </div>  
  );
}

