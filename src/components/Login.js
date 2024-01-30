import React, { useState } from 'react';
import image from "../assets/Left_side.png";
import google from "../assets/Google Sign In.png";
import apple from "../assets/Apple Sign In.png";
import logo from "../assets/Vector 7.png";
import git from "../assets/git.png";
import x from "../assets/X.png";
import linkedin from "../assets/carbon_logo-linkedin.png";
import discord from "../assets/carbon_logo-discord.png";
import { Link } from 'react-router-dom';
import './login.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogin(true);
  };

  return (
    <div className="min-h-screen relative">
      <div className="flex items-center">
      <div className="h-1024px w-719.99px relative">
  <img src={image} alt="Left Side" />
  <img
    src={logo}
    alt="Logo"
    className="absolute rounded-full mt-5"
    style={{
      width: '80.15px',
      height: '80.15px',
      top: '5px',
      left: '50.03px',
      backgroundColor: '#FCFCFF',
    }}
  />
  <div className="absolute flex justify-evenly  bottom-40 left-0 right-40  px-8">
    <img src={git} alt="Logo 1" style={{ width: '44px', height: '44px' }} />
    <img src={x} alt="Logo 2" style={{ width: '42px', height: '41px' }} />
    <img src={linkedin} alt="Logo 3" style={{ width: '48px', height: '48px' }} />
    <img src={discord} alt="Logo 4" style={{ width: '50px', height: '48px' }} />
  </div>
  <p
    className="absolute text-white font-bold"
    style={{
      fontFamily: 'Montserrat',
      fontSize: '72px',
      fontWeight: 700,
      lineHeight: '88px',
      letterSpacing: '0em',
      textAlign: 'left',
      top: '35%',
      left: '40%',
      transform: 'translate(-50%, -50%)',
    }}
  >
    BASE
  </p>
</div>


        
        <div className="absolute" style={{ top: '180.11px', left: '890.18px' }}>
        <h1 
  className="text-8xl font-bold mb-2" 
  style={{
    fontFamily: 'Montserrat',
    fontWeight: 1000,
    fontSize: '36px',
    lineHeight: '43.88px'
  }}
>
  Sign In
</h1>
<p 
  className="text-black-600 mb-4 px-1" 
  style={{
    fontFamily: 'Lato',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '19.2px'
  }}
>
  Sign in to your account
</p>
          
          <div className="flex mb-3">
          <img src={google} alt="Sign in with Google" style={{ width: '197.6px', height: '32.93px' }} />
            <img src={apple} alt="Sign in with Apple" style={{ width: '197.6px', height: '32.93px' }} />
          </div>
          <br/>

          <form className="w-72 px-0" onSubmit={handleSubmit}>
            <label htmlFor="email" className="block mb-1">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-3 w-full h-390.8px rounded border-gray-400 px-3 py-2"
            />
            
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mb-3 w-full rounded border-gray-400 px-3 py-2"
            />
            
            <a href='#' className="text-gray-600 block mb-4" style={{ color: '#346BD4' }}>
  Forgot password?
</a>

       <Link className="link" to="/upload"> <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-6">Sign In</button></Link>    
          </form>

          {errorMessage && <p className="text-red-500 mb-3 ">{errorMessage}</p>}
          {!isLogin && <p className='px-5'>Don’t have an account? <a href='#' className="text-blue-500">Register here</a></p>}
        </div>
      </div>
    </div>
  );
};

export default Login;














