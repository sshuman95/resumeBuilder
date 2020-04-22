import React, {  useState, Fragment } from 'react';
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

  },
  btn:{
    marginBottom:5,
    width:170
  }
}));
//{company:"",title:"",location:"",duty:[]}]);




const ExpForm = (props)=>{
    const classes = useStyles();
    const [edit, setEdit] = useState(false);
    const [dutyToAdd, setDuty] = useState('')

    const handleChange = (event) => {
      event.preventDefault();
      console.log(event.target.value)
      setDuty(event.target.value);
      console.log(props.e)
    }

    const handleEdit = (event) => {
        event.preventDefault();
        setEdit(!edit)
      }
    return(
     <section>
         {edit?<form className={classes.form}>
         <TextField 
          id="company-textArea"
          label="Company"
          placeholder="Placeholder"
          multiline
          name="company"
          onChange={(event)=>props.edit(props.i,event.target.name,event.target.value)} 
          value={props.e.company}
          />
          <TextField 
          id="location-textArea"
          label="Location"
          placeholder="Placeholder"
          multiline
          name="location"
          onChange={(event)=>props.edit(props.i,event.target.name,event.target.value)} 
          value={props.e.location}
          />
          <TextField 
          id="title-textArea"
          label="Title"
          placeholder="Placeholder"
          multiline
          name="title"
          onChange={(event)=>props.edit(props.i,event.target.name,event.target.value)} 
          value={props.e.title}
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
        <Button variant="contained" style={{marginTop:'5px'}} className={classes.btn}  color="primary" onClick={()=>{props.add(props.i,dutyToAdd); setDuty('')}} type="button">
            Add Duty
        </Button>
          <Button variant="contained" className={classes.btn} color="primary" onClick={handleEdit} type="button">
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