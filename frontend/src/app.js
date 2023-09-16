import React,{ useState,useEffect} from "react";
import {Container, AppBar, Typography, Grow, Grid} from "@mui/material";
import { useDispatch } from "react-redux";
import {getPosts} from './actions/posts';

import Posts from "./components/Posts/posts"
import Form from "./components/Form/form"
import memories from "./images/memories.png"
import  "./style.css";


const App=()=>{
    const[currentId, setCurrentId]=useState(null);
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId,dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar  className="appBar" position="static" color="inherit">
                <Typography className="heading" variant="h2" align="center">
                    Memories
                </Typography>
                <img className="image" src={memories} alt="memories" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignContent="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
        
    );
}

export default App;