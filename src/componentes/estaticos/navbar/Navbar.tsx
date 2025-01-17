import React from "react";
import { AppBar, Box, TextField, Toolbar, Typography } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/token/tokenReducer";
import { addToken } from "../../../store/token/actions";
import {toast} from 'react-toastify';


function Navbar() {

    let history = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined
        });
        history('/login')
    }

    var navComponent;

    if(token != '') {

        
        navComponent = <AppBar position="static">
                            <Toolbar className='nav-main' >
                            
                            
                                    <Grid xs={4}>
                                        <Box className="nome-marca">
                                            <img src="https://i.imgur.com/LSGPpin.png" height="56px" />
                                            <Typography variant="h6" color="inherit">
                                                mercado limpo
                                            </Typography>
                                        </Box>
                                    </Grid>                               
          
                                    <Grid xs={5} className="container">
                                        <Box className="nav-link">
                                            <Link to='/home' className="link">                                                
                                                    <Typography variant="h6" color="inherit" className="typography">
                                                        home
                                                    </Typography>                                                
                                            </Link>
                                            
                                            <Link to='/produtos' className="link">                              
                                                <Typography variant="h6" color="inherit" className="typography">
                                                    produtos
                                                </Typography>
                                           </Link>

                                           <Link to='/categoria' className="link">                              
                                                <Typography variant="h6" color="inherit" className="typography">
                                                    categorias
                                                </Typography>
                                           </Link>

                                            <Link to='/sobre' className="link">                                                
                                                    <Typography  color="inherit" className="typography">
                                                        sobre nós
                                                    </Typography>                                                
                                            </Link>

                                            <Link to='/contato' className="link">                                                
                                                    <Typography  color="inherit" className="typography">
                                                        contato
                                                    </Typography>                                                
                                            </Link>

                                            <Link to='/login' className="link">                                                
                                                    <Typography color="inherit" className="typography" onClick={goLogout}>
                                                        logout
                                                    </Typography>                                                
                                            </Link>
                                        </Box>
                                    </Grid>                        
                            </Toolbar>
                        </AppBar>
    } else {
        navComponent = <AppBar position="static">
                            <Toolbar className='nav-main' >
                            
                                    <Grid xs={4}>
                                        <Box className="nome-marca">
                                            <img src="https://i.imgur.com/LSGPpin.png" height="56px" />
                                            <Typography variant="h6" color="inherit">
                                                mercado limpo
                                            </Typography>
                                        </Box>
                                    </Grid>                                  
                                    
                                    <Grid xs={5} className="container">
                                        <Box className="nav-link">
                                            <Link to='/home' className="link">                                                
                                                    <Typography variant="h6" color="inherit" className="typography">
                                                        home
                                                    </Typography>                                                
                                            </Link>

                                            <Link to='/produtos' className="link">     
                                                    <Typography variant="h6" color="inherit" className="typography">
                                                        produtos
                                                    </Typography>
                                           </Link>

                                            <Link to='/sobre' className="link">                                                
                                                    <Typography  color="inherit" className="typography">
                                                        sobre nós
                                                    </Typography>                                                
                                            </Link>

                                            <Link to='/contato' className="link">                                                
                                                    <Typography  color="inherit" className="typography">
                                                        contato
                                                    </Typography>                                                
                                            </Link>

                                            <Link to='/login' className="link">                                                
                                                    <Typography color="inherit" className="typography">
                                                        login
                                                    </Typography>                                                
                                            </Link>
                                        </Box>
                                    </Grid>             
                            </Toolbar>
                        </AppBar>
    }

    
    return (
        <>
            {navComponent}
            
        </>
    );
}

export default Navbar;