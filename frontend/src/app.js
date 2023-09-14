import React from "react";
import {Container, AppBar, Typography, Grow, Grid} from "@mui/material";
import Posts from "./components/Posts/posts"
import Form from "./components/Form/form"
import memories from "./images/memories.png"
import  "./style.css";


function App(){
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
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
        
    );
}

export default App;