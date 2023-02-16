import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"

function SignUp() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://127.0.0.1:8000/signup", {
          email,
          name,
          phoneno,
          password,
        })
        .then((res) => {
          if (res.data === "already exist") {
            alert("User already exists");
          } else if (res.data === "added") {
            history("/home", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login">
      <h1>SignUp</h1>
      <form action="POST">
        <label>Email id :</label>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name="email"
          id="email"
        />
        <br/><br/>
        <label>Name : </label>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
          name="name"
          id="name"
        />
        <br/><br/>
        <label>Phone Number :</label>
        <input
          type="text"
          onChange={(e) => {
            setPhoneno(e.target.value);
          }}
          placeholder="Phone Number"
          name="phoneno"
          id="phoneno"
        />
        <br/><br/>
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
        <br/><br/>
        <input type="submit" onClick={submit} />
        <br/><br/>
      </form>
      <br /><br/>
      <p>OR</p>
      <br />
      <Link to="/">login Page</Link>
    </div>
  );
}

export default SignUp;
