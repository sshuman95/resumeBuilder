import React, { useEffect, useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ExpForm from "./expForm";

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





const Experience = ()=>{
    const classes = useStyles();
    const [exp, setExp] = useState([]);
    const addExp = (event) => {
            event.persist();
            setExp([...exp,{company:"",title:"",location:"",duty:[]}]);
    }

    const editExp = (i,n,val) =>{
        exp[i][n] = val;
        setExp([...exp]);
    }

    const addDuty = (i,val) =>{
        if(val){
        exp[i].duty.push(val);
        console.log(exp)
        setExp([...exp])} else {
            return
        }
    }

    return(
        <article className='exp'>
        <h2>Experience</h2>
        <section>
                {exp.length>0?exp.map((e,i)=>{
                    return(
                            <ExpForm e={e} i={i} add={addDuty} edit={editExp}/>)
                }):<h1>Add Experience</h1>}
        </section>
            <Button variant="contained" color="primary" type="button" onClick={addExp}>
                Add Experience
            </Button>
        </article>
    )
};

export default Experience;

/* <section>
                        <h3>{company} - {location} </h3>
                        <h5>{title}</h5>
                        <ul>
                            <li>{listItem}</li>
                            
                        </ul>
                    </section> */