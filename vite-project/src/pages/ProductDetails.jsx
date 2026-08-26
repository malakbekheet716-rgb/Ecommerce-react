//3ashan ashof el product el i clicked on
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";//parms gets a valuefrom URL el howa el id of product
import { getProductById } from "../data/products";
import { useCart } from "../context/CartContext";


export default function ProductDetails(){
    const {id} = useParams();// gets id parameter w store it fy i bas m3mol ka obj 3ashan params btrg3 obj
    const[product,setProduct] = useState(null);
    const navigate = useNavigate();
    const {addToCart, cartItems} = useCart();// zy signin w Logout mn auth keda


    useEffect(() =>{//runs after comp appeares y3ny after rendering
        const foundProduct = getProductById(id);//calling my own function w 23ml store fy found da

        if(!foundProduct){//dy bt2oly howa l2a el product wala l2
            navigate("/");//law not found yr3gny lel defaukt page
            return;// dy stops function 3ala toll zy break keda
        }
        setProduct(foundProduct);
    }, [id]);// dy keda dependency y3ny lma id state changes 

    if (!product) {// enma dy bt2oly lw react received it yet? homa l2o bas les mar7sh ly react fa 23ml loading skeleton
    return <h1>Loading...</h1>;
  }

  const productInCart = cartItems.find((item) => item.id === product.id);//checks lw el item da in my cart

  const productQuantityLabel = productInCart// ternary b7ot bas 3add el product da na gyba mn add eh la wfy el cart hy7ot el 3add law l2 empty
    ? `(${productInCart.quantity})`
    : "";

  

    return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-content">
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-price">${product.price}</p>
            <p className="product-detail-description">{product.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart {productQuantityLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}