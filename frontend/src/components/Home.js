import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Home = () => {
    return (
        <>
       <div className="home-page">
           <div className="home-div">
               <p>HELLO THERE</p>
               <h1>WELCOME BACK TO SSQUARE</h1>
               <Button variant="contained" color="primary" className="btn">
             LOGIN
      </Button>
           </div>
       </div>
  </>
    )
}

export default Home
