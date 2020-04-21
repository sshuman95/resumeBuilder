import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


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
      width:"60%",

  }
}));





const Header = ()=>{
    const classes = useStyles();
    const [inputs, setInputs] = useState({});
    const [edit, setEdit] = useState(false);
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
      };

    const handleEdit = (event) => {
        event.preventDefault();
        setEdit(!edit)
      }

    return(
    <header className='resumeHead'>
        <h1 style={{color:'rgba(30,40,11,.7)'}}>{inputs.name || "Your Name here"}</h1>
       {edit? <form onSubmit={handleEdit} className={classes.form}>
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
         <Button variant="contained" color="primary" type="submit">
            Save Header
        </Button>
        </form>:
        <Fragment>
      
            <h4>{inputs.email || "Your Email here"}</h4>
            <h4>{inputs.phone || "Your Phone # here"}</h4>
            <h4>{inputs.address || "Your Address here"}</h4>
            <Button variant="contained" color="primary" type="button" onClick={handleEdit}>
                Edit Header
            </Button>
        </Fragment>
        }
       
    </header>
    )
};

export default Header;