import React from "react";
import { TextField,Button,Typography,Paper } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import "./style.css";
import { useState } from "react";
import { createPost } from "../../actions/posts";


function Form(){
    const [postData, setPostData]= useState({creator: "", title: "", message: "", tags: "",selectedFile: ""});
    const dispatch= useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(createPost(postData));
    }
    const clear =()=>{

    }
    return (
        <Paper className="paper">
            <form autoComplete="off" noValidate className="root form" onSubmit={handleSubmit}>
                <Typography variant="h6">
                    Creating a Memory
                </Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e)=> setPostData({ ...postData, creator: e.target.value })}  />
                <TextField name="title" variant="outlined" label="title" fullWidth value={postData.title} onChange={(e)=> setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="message" fullWidth value={postData.message} onChange={(e)=> setPostData({ ...postData, message: e.target.value })}  />
                <TextField name="tags" variant="outlined" label="tags" fullWidth value={postData.tags} onChange={(e)=> setPostData({ ...postData, tags: e.target.value })}  />
                <div className="fileInput">
                    <FileBase type="file" multiple={false} onDone={({base64})=> setPostData({...postData,selectedFile: base64})}> </FileBase>
                </div>
                <Button className="buttonSubmit" variant="contained" color="primary" size="large" type="submit" fullWidth>
                    Submit
                </Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear}fullWidth>
                    clear
                </Button>
            </form>
        </Paper>
    );
}
export default Form;