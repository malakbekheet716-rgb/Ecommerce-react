import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import './App.css';
import AuthProvider from "./context/AuthContext";
import ProductDetails from "./pages/ProductDetails";
import CartProvider from "./context/CartContext";

function App() {
  return(
    <AuthProvider>
      <CartProvider>
       <div className="app">{/*className hy3ml apply lel style mn css*/}
        <Navbar />
          <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/auth" element={<Auth/>}/>
           <Route path="/checkout" element={<Checkout/>}/>
           <Route path="/products/:id" element={<ProductDetails/>}/> {/*dynamic route kol id hytl3ly product */}
         </Routes>
       </div> 
     </CartProvider>
    </AuthProvider>
  );
}
export default App
