import React from "react";
import {Container} from "@mui/material";
import  "./style.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Auth from "./components/Auth/Auth";
import { GoogleOAuthProvider } from '@react-oauth/google';




const App=()=>{
    return (
        <GoogleOAuthProvider clientId="812786811306-fdlh33hl35gsrgtjcp39vhau2o7lpcd5.apps.googleusercontent.com">
            <BrowserRouter>
        <Container maxWidth="lg">
            <Navbar/>
            <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="/auth" exact Component={Auth} />
            </Routes>
        </Container>
        </BrowserRouter>
        </GoogleOAuthProvider>    
    );
}

export default App;