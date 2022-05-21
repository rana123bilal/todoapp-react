import {useState} from 'react';

const Login = (props) => {

    const[loginData, setLoginData] = useState({
        email : '',
        password : '',
    })

    const onEmailHandler=(event)=>{
        setLoginData({...loginData, email : event.target.value})
    }
    const onPasswordHandler=(event)=>{
        setLoginData({...loginData, password : event.target.value})
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        console.log(loginData)
        props.setShowLogin(false)        
        props.setShowTodoList(true)

    }
    

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
            <label>Email
            <input type='email' onChange={onEmailHandler} />
            </label>
            <label>Password
            <input type='password' onChange={onPasswordHandler}/>
            </label>
            <button type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Login;