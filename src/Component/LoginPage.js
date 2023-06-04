import React from 'react'
import {Navigate} from 'react-router-dom'
import { useState } from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {RiLockPasswordFill} from 'react-icons/ri'

const LoginPage = () => {

  const [Username, setUsername ] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange =(event) => {
    setUsername(event.target.value);
  }
  const handlePasswordChange = (event) =>{
    setPassword(event.target.value);
  }
 


  const handleLogin =(event) =>{
    event.preventDefault();
    if (Username === 'demo@coralmango.com' && password === 'demo123') {
       // Call the onLogin function to indicate successful login
       setIsLoggedIn(true);
    }
       else{
        setErrorMessage('Invalid Credentials!');
       }
    }
  
   if (isLoggedIn) {
    return <Navigate to="/home"/>
   }
  return (
    <>
    <div className='container'>
       <div className='login-box'>
      <form onSubmit={handleLogin}>
          <h2 className='login-heading'>Login</h2>
      <div className='login'>
        <div className='user'>
          <label htmlFor="name" className='icon'><FaUserCircle/></label>
            <input className='input-text'
            type='text'
            placeholder='Username'
            value={Username}
            onChange={handleUsernameChange}
            />
        </div>
        <div className='password'>
          <label htmlFor="Password" className='icon'><RiLockPasswordFill /></label>
            <input className='input-text'
            type='text'
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
            />
           
        </div>
        <div className='btn-class'>
        <button type='submit' className='btn'>Login</button>
        {errorMessage &&  <div className='message'> {errorMessage}</div> }
        </div>
      </div>
      </form>
      </div>
      </div>
    </>
  )
}

export default LoginPage
