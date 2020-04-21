import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EduForm from "./eduForm";

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





const Education = ()=>{
    const classes = useStyles();
    const [edu, setEdu] = useState([]);
    const addEdu = (event) => {
            event.persist();
            setEdu([...edu,{organization:"",date:"",details:""}]);
    }

    const editEdu = (i,n,val) =>{
        edu[i][n] = val;
        setEdu([...edu]);
    }

    return(
        <article className='education'>
        <h2>Education</h2>
                {edu.length>0?edu.map((e,i)=>{
                    return(
                            <EduForm e={e} i={i} edit={editEdu}/>)
                }):<h1>Add Education</h1>}
            <Button variant="contained" color="primary" type="button" onClick={addEdu}>
                Add Education
            </Button>
            </article>
    )
};

export default Education;