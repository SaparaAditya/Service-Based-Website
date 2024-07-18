  import { createContext, useContext, useState, useEffect } from "react";

  export const AuthContext = createContext();

  // eslint-disable-next-line react/prop-types
  export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    // const [userid, setuserid] = useState("");
    const [user, setUser] = useState(false);
    const [services, setServices] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const authorizationToken = `Bearer ${token}`;
    // console.log(services);

    //function to stored the token in local storage
    const storeTokenInLS = (serverToken,userid) => {
      // setuserid(userid);
      setToken(serverToken);
      localStorage.setItem("token", serverToken);
      localStorage.setItem("userid", userid);
      // localStorage.setItem("isAdmin",isAdmin)
      const a = localStorage.getItem("isAdmin");
      userAuthentication(a);

    };

    //   this is the get the value in either true or false in the original state of token
    let isLoggedIn = !!token;
    let a = localStorage.getItem("isAdmin");

    // console.log(a);
    // console.log("token", token);
    // console.log("isLoggedin ", isLoggedIn);

    //   to check whether is loggedIn or not
    const LogoutUser = () => {
      setToken("");
      // setuserid("");
      localStorage.removeItem("isAdmin");
      localStorage.removeItem("token");
      localStorage.removeItem("userid");
      localStorage.removeItem("username");
      localStorage.removeItem("email");
    };


    //for provide data using token
    const userAuthentication = async (a) => {

    // console.log(token);
  
      try {

        setIsLoading(true);
        const response = await fetch("http://localhost:5173/api/auth/user", {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        });
        // console.log(`this is a ${a}`);
        // console.log(`before is ${user}`);
        // setUser(a);
        // console.log(`this is ${user}`);
        console.log(response);
        if (response.ok) {
          // console.log("hiiiiiiii");
        setIsLoading(false);
        // const kata = await response.json();

        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user data");
      }
    };
    // let dd;
    const getServices = async () =>{
      try {
        const response = await fetch("http://localhost:5000/api/data/service",{
          method:"GET",
        });

        if(response.ok){
          const data = await response.json();
          setServices(data.msg);
          // console.log(data.msg);
        }

      } catch (error) {
        console.log(`services frontend error: ${error}`);
      }
    }
    
    useEffect(() => {
      // userAuthentication();
      getServices();
    },[]);


    return (
      <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services, authorizationToken, isLoading,a}}>
        {children}
      </AuthContext.Provider>
    );
  };  

  export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
      throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
  };  