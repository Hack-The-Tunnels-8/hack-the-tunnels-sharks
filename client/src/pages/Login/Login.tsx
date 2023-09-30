import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";

function Login() {
  const [message, setMessage] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();

  function checkLogin(){
    let username = document.getElementById("username").innerHTML;
    let password = document.getElementById("password").innerHTML;
    
  }
  
  const attemptLogin = async () => {
    try {
      const message = await login("admin@email.com", "password");
      
      
      
      setMessage(message);
      
    } catch (error) {
      setMessage("Wrong credentials");
      console.log(error);
    }
  };

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);
  

  return (
    <Page>
      <div className="login-page">
        <h1>Login</h1>
        <form>
          <label>Username: </label>
          <input type="text" id="username"></input>
          <br></br>
          <label>Password:  </label>
          <input type="text" id="password"></input>
          <br></br>
          
          
        </form>
        
        <button onClick={() => attemptLogin()}>
          Login
          {message && <p>{message}</p>}
          </button>
        
      </div>
    </Page>
  );
}

export default Login;
