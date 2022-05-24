import { useState } from "react";
import './registerForm.css';

function Register(props) {
  const [registeredData, setRegisteredData] = useState({
    email: "",
    username: "",
    phoneno: "",
    password: "",
  });
  const [formIsValid, setFormIsValid] = useState(false);


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
    if(registeredData.password.length > 6){
      props.setShowRegister(false)   
        props.setShowLogin(true);
    }else{
      setFormIsValid(true)
    }
 
    
  };

  return (
    <div className="register-form">
      {formIsValid && <p>Please Enter Strong Password</p>}
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input type="email" onChange={onEmailHandler} />
        </label>
        <label>
          <span>Name</span>
          <input type="text" onChange={onUsernameHandler} />
        </label>
        <label>
          {" "}
          <span>Phone number</span>
          <input type="number" onChange={onPhoneNoHandler} />
        </label>
        <label>
          {" "}
          <span>Password</span>
          <input type="password" onChange={onPasswordHandler} />
        </label>
        <button className="registerbutton" type="submit">
          <span>Register</span>
        </button>
      </form>
    </div>
  );
}

export default Register;
