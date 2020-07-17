import React, { Component } from 'react';
import './App.css';
import { AppBar, Toolbar, Icon, Menu, Button, IconButton, Typography, Grid,  } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { styled } from '@material-ui/core/styles';

const MyHeader = styled(AppBar)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
});


export default function StyledComponents() {
    return (
        <MyHeader position="static">
            <Toolbar>
                <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
                <MenuIcon />
                </IconButton>
            </Toolbar>
        </MyHeader>
    ) 
};
