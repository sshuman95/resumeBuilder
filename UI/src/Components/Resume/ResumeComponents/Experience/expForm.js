import React, {  useState, Fragment,useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ButtonContext } from "../../ButtonContext";
import { UserContext } from "../../UserContext";

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

  },
  btn:{
    marginBottom:5,
    width:170
  }
}));





const ExpForm = (props)=>{
    const classes = useStyles();
    const [edit, setEdit] = useState(false);
    const [dutyToAdd, setDutyToAdd] = useState('')
    const [duty, setDuty] = useState([])
    const [company, setCompany] = useState('')
    const [location, setLocation] = useState('')
    const [title, setTitle] = useState('')
    const [buttons] = useContext(ButtonContext);
    const [user] = useContext(UserContext)

    useEffect(()=>{
      if(user){
        let test = {
          company:props.e.company,
          location:props.e.location,
          title:props.e.title,
          duty:props.e.duty
        };
        setCompany(test.company)
        setLocation(test.location)
        setTitle(test.title)
        setDuty(test.duty)
      } else {
        setCompany('')
        setLocation('')
        setTitle('')
        setDuty([])
      }
    },[user])


    const handleChange = (event) => {
      event.preventDefault();
      setDutyToAdd(event.target.value);
    }

    const addDuty = (event) => {
      event.preventDefault();
      let dutyArr = duty;
      if(dutyToAdd){
        dutyArr.push(dutyToAdd);
        setDuty(dutyArr)
        setDutyToAdd('')
      } else {
        return
      }
  }

    const handleEdit = (event) => {
        event.preventDefault();
        setEdit(!edit)
    }

    const handleCompanyChange = (event) =>{
      setCompany(event.target.value)
    }
  
    const handleLocationChange = (event) =>{
        setLocation(event.target.value)
    }
  
    const handleTitleChange = (event) =>{
        setTitle(event.target.value)
    }


    return(
     <section>
         {edit && buttons?<form className={classes.form} onSubmit={(event)=>{event.preventDefault();props.edit(props.i,company,title,location,duty);setEdit(!edit)}}>
         <TextField 
          id="company-textArea"
          label="Company"
          placeholder="Placeholder"
          multiline
          name="company"
          onChange={handleCompanyChange} 
          value={company}
          />
          <TextField 
          id="location-textArea"
          label="Location"
          placeholder="Placeholder"
          multiline
          name="location"
          onChange={handleLocationChange} 
          value={location}
          />
          <TextField 
          id="title-textArea"
          label="Title"
          placeholder="Placeholder"
          multiline
          name="title"
          onChange={handleTitleChange} 
          value={title}
          />
          <TextField 
          id="duty-textArea"
          label="Duty"
          placeholder="Placeholder"
          multiline
          name="duty"
          onChange={handleChange} 
          value={dutyToAdd}
          />
          <Button variant="contained" style={{marginTop:'5px'}} className={classes.btn}  color="primary" onClick={addDuty} type="button">
            Add Duty
          </Button>
           <ul>
            {duty.map(d=>{
              return (
                <li>{d}</li>
              )
            })}
         </ul>
          <Button variant="contained" className={classes.btn} color="primary" type="submit">
           Save Experience
        </Button>
          </form>:
          <Fragment>
          <h3>{props.e.company || "Company goes here"} - {props.e.location || "Location goes here"} </h3>
          <h5>{props.e.title || "Job Title goes here"}</h5>
          <ul>
            {props.e.duty.map(d=>{
              return (
                <li>{d}</li>
              )
            })}
         </ul>
            {props.buttons?<Button className={classes.btn} variant="contained" color="primary" onClick={handleEdit} type="button">
            Edit Experience
        </Button>:''}
        </Fragment>}
    </section>)
};

export default ExpForm;