import {Link} from "react-router-dom";

export default function Navbar(){
    return (
    <nav className="navbar">
      <div className="navbar">
        <Link to="/" className="navbar-brand">
          ShopHub {/*lma ados 3ala el logog yrg3ny lel home */}
        </Link>
        <div className="navbar-links">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/Checkout" className="navbar-link">Cart</Link>
        </div>
        <div className="navbar-auth">
            <div className="navbar-auth-links">
              <Link to="/Auth" className="btn btn-secondary">Login</Link>
              <Link to="/Auth" className="btn btn-primary">SignUp</Link> 
            </div>
        </div>
      </div>  
    </nav>
    );
}