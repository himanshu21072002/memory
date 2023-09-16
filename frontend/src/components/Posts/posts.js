import React from "react";
import Post from "./post/post";
import { Grid, CircularProgress } from "@mui/material";
import "./style.css";
import { useSelector } from "react-redux"; 

function Posts() {
  const posts= useSelector((state)=>state.posts);
  console.log(posts);
  return (
    !posts.length ? <CircularProgress /> : 
      (
        <Grid className="mainContainer" container alignItems="stretch" spacing={3} > 
          {
            posts.map((post)=>(
              <Grid key={post._id} item xs={12} sm={6}>
                  <Post post={post}>
                  </Post>
                </Grid>
            ))
          }
        </Grid>
      )
  );
}
export default Posts;
