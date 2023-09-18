import React from "react";
import {Container} from "@mui/material";
import  "./style.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Auth from "./components/Auth/Auth";


const App=()=>{
    return (
        <BrowserRouter>
        <Container maxWidth="lg">
            <Navbar/>
            <Routes>
                <Route path="/" exact Component={Home} />
                <Route path="/auth" exact Component={Auth} />
            </Routes>
        </Container>
        </BrowserRouter>
        
    );
}

export default App;