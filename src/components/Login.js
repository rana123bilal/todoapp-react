import { useState } from "react";
import "./Login.css";

const Login = (props) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const onEmailHandler = (event) => {
    setLoginData({ ...loginData, email: event.target.value });
  };
  const onPasswordHandler = (event) => {
    setLoginData({ ...loginData, password: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.setShowLogin(false);
    props.setShowTodoList(true);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <label>
          <span>Email</span>
          <input type="email" onChange={onEmailHandler} />
        </label>
        <label>
          <span>Passwords</span>
          <input type="password" onChange={onPasswordHandler} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
