import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ResumeContext } from "../Resume/ResumeContext";
import { UserContext } from "../Resume/UserContext";
import fire from '../../config/fire';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  btn:{
    marginTop:5
  }
}));




const Login = ()=>{
    const classes = useStyles();
    const [skill, setSkill] = useState('');
    const [resume,setResume] = useContext(ResumeContext);
    const [user,setUser] = useContext(UserContext);
    
    
    const handleEdit = (event) => {
      event.preventDefault();
    }

    const handleLogin = (event) =>{
        axios.get("/login")
        .then((res)=>{
            setResume(res.data[0])
            setUser(true)
        })
    }

    const logout = (event) => {
        event.preventDefault();
        setResume( {header:{name:"",email:"",phone:"",address:""},skills:[],education:[],experience:[]})
        setUser(false)
        fire.auth().signOut();
    }


    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={logout}>Logout</button>
        </div>
    )
};

export default Login;


/* authListener(){
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({
                    user:user
                })
            } else{
                this.setState({
                    user:null
                })
            }
        })
    }

    login(event){
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then((u)=>{})
        .catch(error=>{
            console.log(error)
        })
    }

    logout(){
        fire.auth().signOut();
    } */