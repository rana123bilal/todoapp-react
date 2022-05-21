import { useState } from "react";

function Register(props) {
  const [registeredData, setRegisteredData] = useState({
    email: "",
    username: "",
    phoneno: "",
    password: "",
  });

  const onEmailHandler = (event) => {
    setRegisteredData({ ...registeredData, email: event.target.value });
  };
  const onUsernameHandler = (event) => {
    setRegisteredData({ ...registeredData, username: event.target.value });
  };
  const onPhoneNoHandler = (event) => {
    setRegisteredData({ ...registeredData, phoneno: event.target.value });
  };
  const onPasswordHandler = (event) => {
    setRegisteredData({ ...registeredData, password: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(registeredData);
    props.setShowRegister(false)
    props.setShowLogin(true);
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" onChange={onEmailHandler} />
        </label>
        <label>
          {" "}
          Username
          <input type="text" onChange={onUsernameHandler} />
        </label>
        <label>
          {" "}
          Phone number
          <input type="number" onChange={onPhoneNoHandler} />
        </label>
        <label>
          {" "}
          Password
          <input type="password" onChange={onPasswordHandler} />
        </label>
        <button className="registerbutton" type="submit">
          Register
        </button>
      </form>
    </>
  );
}

export default Register;
