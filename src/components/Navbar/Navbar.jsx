import React from 'react';
import {AppBar, IconButton, MenuItem, Menu, Typography, Toolbar} from '@material-ui/core';
import { Badge } from '@mui/material';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../Images/logo.png';
import useStyles from './styles';
import {Link, useLocation} from 'react-router-dom'

const Navbar = ({totalItems}) => {
  const classes = useStyles();
  const location = useLocation();


  return (
    <>
        <AppBar position='fixed' className={classes.AppBar} color='inherit'>
            <Toolbar>
                <Typography component={Link} to="/" variant='h6' className={classes.title} color='inherit'>
                    <img src={logo} alt = 'Coomerce.js' height='60px' className={classes.image}/>
                    EcoSnacks    
                </Typography>
                <div className={classes.grow} />
                {location.pathname === '/' && (
                <div className={classes.button}>
                    <IconButton component={Link} to='/cart' aria-label='Show cart items' color='inherit'>
                        <Badge badgeContent ={totalItems} color ='secondary'>
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>)} 
            </Toolbar>

        </AppBar>
    </>
  )
}

export default Navbar