import React, {  useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExpForm from "./expForm";
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
      width:"60%",

  },
 btn:{
     width:170
 }
}));





const Experience = ()=>{
    const classes = useStyles();
    const [exp, setExp] = useState([]);
    const [buttons] = useContext(ButtonContext);
    const [resume,setResume] =useContext(ResumeContext);
    const addExp = (event) => {
            event.persist();
            setResume({ ...resume, experience: [...resume.experience, {company:"",title:"",location:"",duty:[]}] });
    }

    const editExp = (i,company, title, location,duty) =>{
        let newExp = resume;
        newExp.experience[i].company = company;
        newExp.experience[i].title = title;
        newExp.experience[i].location = location;
        newExp.experience[i].duty = duty;
        setResume(newExp)
        }

    const addDuty = (i,val) =>{
        let newDuty = exp;
        if(val){
        newDuty[i].duty.push(val);
        setExp(newDuty)
        } else {
            return
        }
    }



    return(
        <article className='exp'>
        <h2>Experience</h2>
        <section>
                {resume.experience.length>0?resume.experience.map((e,i)=>{
                    return(
                            <ExpForm buttons={buttons} e={e} i={i} add={addDuty} edit={editExp}/>)
                }):<h1>Add Experience</h1>}
        </section>
            {buttons?
            <Button className={classes.btn}  variant="contained" color="primary" type="button" onClick={addExp}>
                Add Experience
            </Button>:
            ""}
        </article>
    )
};

export default Experience;

