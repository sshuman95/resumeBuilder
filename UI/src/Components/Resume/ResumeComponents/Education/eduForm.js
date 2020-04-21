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





const EduForm = (props)=>{
    const classes = useStyles();
    const [edit, setEdit] = useState(false);

    const handleEdit = (event) => {
        event.preventDefault();
        setEdit(!edit)
      }
    return(
     <section>
         {edit?<form>
         <TextField 
          id="organization-textArea"
          label="Organization"
          placeholder="Placeholder"
          multiline
          name="organization"
          onChange={(event)=>props.edit(props.i,event.target.name,event.target.value)} 
          value={props.e.organization}
          />
          <TextField 
          id="date-textArea"
          label="Date"
          placeholder="Placeholder"
          multiline
          name="date"
          onChange={(event)=>props.edit(props.i,event.target.name,event.target.value)} 
          value={props.e.date}
          />
          <TextField 
          id="details-textArea"
          label="Details"
          placeholder="Placeholder"
          multiline
          name="details"
          onChange={(event)=>props.edit(props.i,event.target.name,event.target.value)} 
          value={props.e.details}
          />
          <Button variant="contained" color="primary" onClick={handleEdit} type="button">
            Edit Education
        </Button>
          </form>:
          <Fragment>
          <h3>{props.e.organization || "Add an organization"}</h3>
          <h5>{props.e.date || "Add a date"}</h5>
          <h3>{props.e.details || "Add details"}</h3> 
        <Button variant="contained" color="primary" onClick={handleEdit} type="button">
            Edit Education
        </Button>
        </Fragment>}
    </section>)
};

export default EduForm;

//onClick={()=>props.edit(props.i,"organization","bulldawg")} organization:"",date:"",details:""