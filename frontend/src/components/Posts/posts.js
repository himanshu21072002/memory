import React from "react";
import Post from "./post/post";
import "./style.css";
import { useSelector } from "react-redux"; 

function Posts() {
  const posts= useSelector((state)=>state.posts);
  console.log(posts);
  return (
    <div>
      <h1 >POSTS</h1>
      <Post/>
      <Post/>
    </div>
  );
}
export default Posts;
