import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://127.0.0.1:8000/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            history("/home", { state: { id: email } });
          }
          else if (res.data === "not exist") {
            alert("User has not registered")
          }
        })
        .catch(e=>{
            alert("wrong details")
            console.log(e);
        })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <br />
      <form action="POST">
        <label>Email id : </label>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name="email"
          id="email"
        />
        <br />  <br />
        <label>Password : </label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          name="password"
          id="password"
        />
        <br />
        <br />
        <input type="submit" onClick={submit} />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/signup">SignUp Page</Link>
    </div>
  );
}

export default Login;
