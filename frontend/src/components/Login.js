import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink,useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
const Login = () => {
  const history= useHistory();
  const  [email, setEmail] = useState('');
  const  [password, setPassword] = useState('');
    const classes = useStyles();

    const loginUser=async (e)=>{
e.preventDefault();

const res= await fetch("/login",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    email,
    password
  })
});

const data= res.json();
if(res.status===400 || !data){
  window.alert("Invalid Credentials");
}else{
  window.alert("login successful");
  history.push("/");
}
    } 
    return (
        <>
    <div className="login">
  <figure className="avatar">
    <img src="//picsum.photos/70" alt="Avatar" className="avatar__image"/>
    <figcaption className="avatar__name">LOG IN</figcaption>
  </figure>
  <form className="form" method="POST">
    <div className="input">
      <label className="input__label">Email</label>
      <input type="email" name="email" id="email" className="input__email" 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      placeholder="me@mail.com"/>
    </div>
    <div className="input">
      <label className="input__label">Password</label>
      <input type="password" name="password" id="password" className="input__password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder="*****"/>
    </div>
  </form>
  <button className="form__button"
  onClick={loginUser}>Log in</button>
</div> 
        </>
    )
}

export default Login
