import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";//gets things from authcontext
import { useNavigate } from "react-router-dom";//that lets you change pages programmatically. once signed in ywdy home

export default function Auth(){
    const [mode,setMode] = useState("signup");
    const [error, setError] = useState(null);
    const { signUp, login } = useAuth();
    const navigate = useNavigate();


    const{
        register, 
        // register function what we use to apply requirements and validation*/
        handleSubmit, //runs once submit handles validation
        formState: { errors }, //errors is an obj that shows error message for any input registered through this function
    } = useForm();

    function onSubmit(data){ // 2wel lma el react hook t5ls validation (handle) tdyha el values b2a 
        setError(null);//cleans any previous error
        let result; //3amltlo create but did not assigna value m3rfsh hast3ml amhy wa7da mn el t7t signup wla in
        if(mode === "signup"){
            result = signUp(data.email, data.password);// law signup ht3ml run ly signUp el gya mn auth
        }else{
            result = login(data.email, data.password);
        }

    

      if(result.success){
        navigate("/");
      }else{
        setError(result.error);
      }
    }



    return (
    <div className="page">
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">
            {mode === "signup" ? "Sign Up" : "Login"} /*ternary operator*/
          </h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}> {/*hena dol 2 functions handle w dy mn react hook form w on el ana katbaha */}
                {/*handle dy el gatekeeper el bawab el hy3ml validation b3den y3dy ell haga  , user submits handle-> react-hook-form checks validation-> if yes onSubmit(data)-> else errors*/}
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                {...register("email", { required: "Email is required" })}//telling react this input repesents email
              />
              {errors.email && (
                <span className="form-error">{errors.email.message}</span>
              )}
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 12,
                    message: "Password must be less than 12 characters",
                  },
                })}
                className="form-input"
                type="password"
                id="password"
              />
              {errors.password && (
                <span className="form-error">{errors.password.message}</span>
              )}
            </div>

            <button type="submit" className="btn btn-primary btn-large">
              {mode === "signup" ? "Sign Up" : "Login"}
            </button>
          </form>

          <div className="auth-switch">
            {mode === "signup" ? (
              <p>
                Already have an account?{" "}
                <span className="auth-link" onClick={() => setMode("login")}>//creates anonymous function when called call setMode, bn3ml keda badl ma n call it directly 3ashan prevent calling while react is rendering rather than waiting for click */
                  Login
                </span>
              </p>
            ) : (
              <p>
                {" "}
                Don't have an account?{" "}
                <span className="auth-link" onClick={() => setMode("signup")}>
                    {/*el 3abt el konty mtl8bta fyh abl keda enty w2fa fy signUp login htb2a coloured bas el enty fyh is greyed out*/}
                  Sign Up
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
  
    





