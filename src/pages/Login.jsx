import React, { useState } from "react";
import { errorToast, successToast } from "../toast";
import ApiProvider, { SUCCESS } from "../api/ApiRequest";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("user@gamil.com");
  const [password, setPassword] = useState("123456");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const params = {
      user: email,
      pass: password,
    };

    const response = await ApiProvider.postRequest("login", params);
    if (response?.status == SUCCESS) {
      successToast(response.data?.message);
      navigate("home");
    } else {
      errorToast(response.data?.message);
    }
  };

  return (
    <div className="maincontainer">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
