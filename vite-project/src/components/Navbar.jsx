import {Link} from "react-router-dom";//move between pages without refreshing the whole website
import { useAuth } from "../context/AuthContext";

export default function Navbar(){
   const {user, logout} = useAuth();

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
          {!user?(// ternary tab3an -> law no body is logged btb2a null fa hena by-check law mafysh had
            <div className="navbar-auth-links">
              <Link to="/auth" className="btn btn-secondary">Login</Link>
              <Link to="/auth" className="btn btn-primary">SignUp</Link> 
            </div>// law mafysh had logged yb2a hyben el sign up/ login buttons
          ):( //law logged fa msh hyben el buttons dy hybyen b2a logout
            <div className="navbar-user">
              <span className="navbar-greeting">Hello, {user.email}</span>
              <button className="btn btn-secondary" onClick={logout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>  
    </nav>
    );
}