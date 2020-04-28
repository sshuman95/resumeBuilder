import React, { useState, Fragment, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { UserContext } from "../../UserContext";

 import { ButtonContext } from "../../ButtonContext";
 import { ResumeContext } from "../../ResumeContext";
 import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  form:{
      display:'flex',
      flexDirection:"column",
      width:"50%",

  },
  btn:{
    margin:"5px auto 0 auto"
  }
}));





const Header = ()=>{
    const classes = useStyles();
    const [inputs, setInputs] = useState({});
    const [edit, setEdit] = useState(false);
    const [buttons] = useContext(ButtonContext);
    const [resume,setResume] = useContext(ResumeContext);
    const [user] = useContext(UserContext)

 useEffect(()=>{
   if(user){
     let test = {
       name:resume.header.name,
       email:resume.header.email,
       phone:resume.header.phone,
       address:resume.header.address
     };
     setInputs(test)
   } else {
     return
   }
 },[user,resume.header.name,resume.header.email,resume.header.phone,resume.header.address])

 
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
      };

    const handleEdit = (event) => {
        event.preventDefault();
        setEdit(!edit)
      };


      const handleSave = (event) => {
        event.preventDefault();
        let resumeHead = resume;
        resumeHead.header.name = inputs.name;
        resumeHead.header.email = inputs.email;
        resumeHead.header.phone = inputs.phone;
        resumeHead.header.address = inputs.address;
        setResume(resumeHead)
        setEdit(!edit)
        if(user){
            axios.post(`/saveHeader/${resume.userId}`,{
              header:resumeHead.header
            })
            .then(res=>{
              console.log(res)
            })
            .catch(error=>{
              console.log(error)
            })
        }
      }


    return(
    <header className='resumeHead'>
        <h1 style={{color:'rgba(30,40,11,.7)'}}>{resume.header.name || "Your Name here"}</h1>
       {edit && buttons? <form onSubmit={handleSave} className={classes.form}>
        <TextField 
          id="name-textArea"
          label="Full Name"
          placeholder="Placeholder"
          multiline
          name="name"
          onChange={handleInputChange} 
          value={inputs.name}
          />
          <TextField 
          id="email-textArea"
          label="Email"
          placeholder="Placeholder"
          multiline
          name="email"
          onChange={handleInputChange} 
          value={inputs.email}
          />
         <TextField 
          id="phone-textArea"
          label="Phone #"
          placeholder="Placeholder"
          multiline
          name="phone"
          onChange={handleInputChange} 
          value={inputs.phone}
          />
         <TextField 
          id="address-textArea"
          label="Address"
          placeholder="Placeholder"
          multiline
          name="address"
          onChange={handleInputChange} 
          value={inputs.address}
          />
         <Button variant="contained" color="primary" className={classes.btn} type="submit">
            Save Header
        </Button>
        </form>:
        <Fragment>
      
            <h4>{resume.header.email || "Your Email here"}</h4>
            <h4>{resume.header.phone || "Your Phone # here"}</h4>
            <h4>{resume.header.address || "Your Address here"}</h4>
           {buttons?<Button variant="contained" color="primary" type="button" className={classes.btn} onClick={handleEdit}>
                Edit Header
            </Button>:''}
        </Fragment>
        }
       
    </header>
    )
};

export default Header;