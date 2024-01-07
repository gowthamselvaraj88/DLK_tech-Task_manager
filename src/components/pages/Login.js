import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [user_password, setUser_password] = useState("");
    const [user_name,setUser_name] = useState("");
  // const [isLoggedin,setisLoggedin] = useState(false);

  // const navigate = useNavigate()
  const history = useHistory()

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/login",{user_name,user_password});
      const role = res.data[0].role_name
      console.log(role);

      if(role == "employee"){
        console.log("gowtham");
        history.push('/TaskList')
      }else if(role == "customer"){
        console.log("sasi");
        history.push('/tasks')
      }else{
        console.log("Invailed")
      }
      
    } catch (error) {
      
    }
    
    //history.push("/tasks");
    
  };
  

  return (
    <div className="container loginCont">
      <h4>Login</h4>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s8">
            
            <input
              name="username"
              // placeholder="Username"
              id="username"
              type="text"
              className="validate"
              value={user_name}
              onChange={(e)=>setUser_name(e.target.value)}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-field col s8">
            <input
              name="password"
              // placeholder="Password"
              id="password"
              type="password"
              className="validate"
              value={user_password}
              onChange={(e)=>setUser_password(e.target.value)}
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div>
         <button
            className="btn waves-effect lime accent-2 black-text waves-dark login"
            type="submit"
            name="action"
          >
            Login
          </button>
         </div>
      </form>
    </div>
  );
};

export default Login;
