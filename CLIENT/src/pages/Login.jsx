import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

const navigate = useNavigate();
const {storeTokenInLS}=useAuth();


  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({ 
      ...user,
      [name]: value,
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
      console.log(user);
      const response= await fetch(`http://localhost:5000/api/auth/login`,{
      method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(user),
    });
    const res_data = await response.json();
    console.log(res_data);
    if(response.ok){
      localStorage.setItem("username",res_data.username);
      localStorage.setItem("email",res_data.email);
      localStorage.setItem("isAdmin",res_data.isAdmin);
      storeTokenInLS(res_data.token,res_data.userId);
      setUser({
        email: "",
        password: "",
      });
      toast.success("Login Succesful");

      navigate("/"); 
    }
    else{
    toast.error(res_data.extradetails?res_data.extradetails:res_data.message);
      
    }
    }
    catch(error){
      alert("Login Fails");
      console.log("register",error);
    }
  };
 //  Help me reach 1 Million subs 👉 https://youtube.com/thapatechnical

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/register.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;