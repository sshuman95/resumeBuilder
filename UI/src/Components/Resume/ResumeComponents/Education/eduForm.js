import React, { useContext, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ButtonContext } from "../../ButtonContext";

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
    width:155
  }
}));





const EduForm = (props)=>{
    const classes = useStyles();
    const [buttons] = useContext(ButtonContext);
    const [edit, setEdit] = useState(false);
    const [organization, setOrganization] = useState('')
    const [date, setDate] = useState('')
    const [details, setDetails] = useState('')
   

    const handleEdit = (event) => {
        event.preventDefault();
        setEdit(!edit)
      }

      const handleOrganizationChange = (event) =>{
          setOrganization(event.target.value)
      }

      const handleDateChange = (event) =>{
        setDate(event.target.value)
    }

    const handleDetailsChange = (event) =>{
      setDetails(event.target.value)
  }
    return(
     <section>
         {edit && buttons?<form onSubmit={(event)=>{event.preventDefault();props.edit(props.i,organization,date,details);setEdit(!edit)}}>
         <TextField 
          id="organization-textArea"
          label="Organization"
          placeholder="Placeholder"
          multiline
          name="organization"
          onChange={handleOrganizationChange} 
          value={organization}
          />
          <TextField 
          id="date-textArea"
          label="Date"
          placeholder="Placeholder"
          multiline
          name="date"
          onChange={handleDateChange} 
          value={date}
          />
          <TextField 
          id="details-textArea"
          label="Details"
          placeholder="Placeholder"
          multiline
          name="details"
          onChange={handleDetailsChange} 
          value={details}
          />
         {buttons?<Button style={{marginTop:"5px"}} className={classes.btn} variant="contained" color="primary" type="submit">
            Save Edit
        </Button>:""}
          </form>:
          <Fragment>
          <h3>{props.e.organization || "Add an organization"}</h3>
          <h5>{props.e.date || "Add a date"}</h5>
          <h3>{props.e.details || "Add details"}</h3> 
          {buttons?<Button className={classes.btn} variant="contained" color="primary" onClick={handleEdit} type="button">
            Edit Education
        </Button>:""}
        </Fragment>}
    </section>)
};

export default EduForm;