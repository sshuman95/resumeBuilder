import React, { useState, Fragment, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//     const value = useContext(ButtonContext);

 import { ButtonContext } from "../../ButtonContext";
 import { ResumeContext } from "../../ResumeContext";

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
        resume.header.name = inputs.name;
        resume.header.email = inputs.email;
        resume.header.phone = inputs.phone;
        resume.header.address = inputs.address;
        setResume(resume)
        setEdit(!edit)
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