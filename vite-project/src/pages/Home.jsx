import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/products";

export default function Home(){
    const products = getProducts();//accessing it
    return(
       <div className="page">
        <div className="home-hero">
            <h1 className="home-title">Welcome to ShopHub</h1>
            <p className="home-subtitle">
                discover amazing products at great prices
            </p>
        </div>
        <div className="container">
            <h2 className="page=-title">Our Products</h2>
            <div className="product-grid">{/*goes through the array one item at a time. */}
                {products.map((product) =>(
                    <ProductCard product={product} key={product.id} /> //creates your ProductCard component for each product.
                ))} {/*product dy el prop w el maben {} dy ely el map lesa gybah */}
            </div>
        </div>
       </div>
    );
}