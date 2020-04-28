import React, { useState, useContext,  useEffect } from 'react';
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
  },
  form:{
      display:'flex',
      flexDirection:"column",
  },
  input:{
      backgroundColor:"white"
  }
}));




const SignUp = ()=>{
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [resume,setResume] = useContext(ResumeContext);
    const [user,setUser] = useContext(UserContext);
    

    useEffect(()=>{
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                axios.get(`/login/${user.uid}`)
                .then(res=>{
                setUser(true)
                setError("")
                setResume(res.data[0])
              
            })
            } else{
                setUser(false)
            }
        })
    },[user,setUser,setError,setResume])
    
    const handleEmailEdit = (event) => {
      event.preventDefault();
      setEmail(event.target.value);
    }

    const handlePasswordEdit = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
      }

    const handleSignUp = (event) =>{
        event.preventDefault();
        axios.post("/signup",{
            email:email,
            password:password
        })
        .then((res)=>{
            if(res.data.error){
                setError(res.data.error)
            } else {
                setError("")
                setMessage(res.data.message)
            }
        })
        .catch((error)=>{
            console.log("error")
        })
    }

    const login =(event) => {
        event.preventDefault();
        if(!email){
            setError('Email cannot be empty')
        } else if(!password){
            setError("Password cannot be empty")
        } else {
            fire.auth().signInWithEmailAndPassword(email,password)
            .then((u)=>{
                axios.get(`/login/${u.user.uid}`)
                .then(res=>{
                    setUser(true)
                    setError("")
                    setResume(res.data[0])
                  
                })
            })
            .catch(error=>{
                setError(error.message)
            })
        }
    }

    const logout = (event) => {
        event.preventDefault();
        setResume( {header:{name:"",email:"",phone:"",address:""},skills:[],education:[],experience:[]})
        setUser(false)
        setEmail("")
        setPassword("")
        fire.auth().signOut();
    }


    return(
        <div>
            {!user?
            <div>
                <article>
                    <p>You can sign up here if you want to be able to edit your resume later</p>
                    {error?<span style={{color:'red'}}>{error}</span>:message?<span style={{color:'green'}}>{message}</span>:""}
                </article>
                <form className={classes.form}>
                        <TextField 
                            id="signUpEmail-textArea"
                            label="Email"
                            placeholder="Email"
                            name="email"
                            onChange={handleEmailEdit} 
                            value={email}
                            className={classes.input}
                        />
                        <TextField 
                            id="signUpPassword-textArea"
                            label="Password"
                            placeholder="Password"
                            type='password'
                            name="password"
                            onChange={handlePasswordEdit} 
                            value={password}
                            className={classes.input}
                        />
            <Button variant="contained" onClick={handleSignUp} className={classes.btn} color="primary" type="button">
                Sign Up
            </Button>
            <Button variant="contained" onClick={login} className={classes.btn} color="primary" type="button">
                Login
            </Button>
                </form>
            </div>: <Button variant="contained" onClick={logout} className={classes.btn} color="primary" type="button">
               Logout
            </Button>}
        </div>
    )
};

export default SignUp;