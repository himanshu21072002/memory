import React,{useState,useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {Link} from "react-router-dom";
import { AppBar, Typography,Button, Toolbar, Avatar } from "@mui/material";
import memories from "../../images/memories.png";
import "./style.css";
import { useDispatch } from "react-redux";



function Navbar() {

  const history= useNavigate();
  const [user,setUser]= useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(user);

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history('/');
    setUser(null);
  };

  useEffect(()=>{
    const token= user?.token;

    //JWT ...
    setUser(JSON.parse(localStorage.getItem('profile')));
  },[location]);

  return (
    <AppBar className="appBar" position="static" color="inherit">
      <div className="brandContainer">
        <Typography
          component={Link}
        //   to="/"
          className="heading"
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img className="image" src={memories} alt="memories" height="60" />
      </div>
      <Toolbar className="toolbar">
        {user?.result ? (
          <div className="profile">
            <Avatar className="purple" alt={user?.result.name} src={user?.result.picture}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className="userName" variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className="logout" color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
