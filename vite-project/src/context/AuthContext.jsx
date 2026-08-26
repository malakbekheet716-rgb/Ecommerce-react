//dy jsx 3ashan it will PROVIDE content, a wrapper
//context let us share values across component tree instead of passing props manually
import {createContext, useState, useContext} from "react";

const AuthContext = createContext(null);//creating context , authcontext da el authentication box bta3y

export default function AuthProvider({children}){ {/*childeren dy 2y haga btb2a wrapped bl authProvider */}
    const [user,setUser] = useState(//ternary bas shbh el 3gl m3lsh 
        localStorage.getItem("currentUserEmail")// dy el storage provided by browser, line da by-check law 3andy haga saved under el email el lesa da5ly da
        ?{email: localStorage.getItem("currentUserEmail")}// law 3andy 5alas hygbholy ganb email:
        :null);


    function signUp(email, passweord){
        const users = JSON.parse(localStorage.getItem("users") || "[]");// b2olo y use hagt el users that exists in local lw mafysh users y save empty array
        //Json.parse 3ashan local stores strings fa lazem a convert to json el 3aks b2a fy JSON.stringify b3ml convert to save in local


        if (users.find((u)=> u.email === email)){{/*checks if email is used before */}
            return{success: false, error:"Email already exists"};
        }
        const newUser = { email, password };//3ashan yd5l tany b3d ma email got rejected
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));//Which accounts exist
        localStorage.setItem("currentUserEmail", email);//which account is currently logged

        setUser({ email });

        return { success: true };

    }

    function login(){
      const users = JSON.parse(localStorage.getItem("users") || "[]");//Get all registered users.
      const user = users.find(
      (u) => u.email === email && u.password === password
     );

      if (!user) {
      return { success: false, error: "Invalid email or password" };
      }

     localStorage.setItem("currentUserEmail", email);
     setUser({ email });

     return { success: true };
    }

    function logout() {
     localStorage.removeItem("currentUserEmail");//removes current logged user HA
     setUser(null);
    }

    return(//makes all values dy available to any thing wrapped by authprovider
    <AuthContext.Provider value={{signUp,user,login,logout}}>
        {children}
    </AuthContext.Provider>

  );
}

//creates own custom hook , badl ma 23od aktb kol shwya useContext(AuthContex)
export function useAuth() { //LAZEM tbd2 b use
  const context = useContext(AuthContext);
  //bt3ml pass lel haga el fy value fo2 dy
  return context;
}
