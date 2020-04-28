import React, {  useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExpForm from "./expForm";
import { ButtonContext } from "../../ButtonContext";
import { ResumeContext } from "../../ResumeContext";
import { UserContext } from "../../UserContext";
import axios from "axios"

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
     width:170,
     marginTop:5
 }
}));





const Experience = ()=>{
    const classes = useStyles();
    const [exp, setExp] = useState([]);
    const [buttons] = useContext(ButtonContext);
    const [resume,setResume] =useContext(ResumeContext);
    const [user] = useContext(UserContext)

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
        if(user){
            axios.post(`/saveExperience/${resume.userId}`,{
                experience:newExp.experience
            })
            .then(res=>{
              console.log(res)
            })
            .catch(error=>{
              console.log(error)
            })
        }
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


    const deleteExp = (i) =>{
        let expToRemove = resume.experience
        expToRemove.splice(i,1);
        setResume({ ...resume, experience: expToRemove});
        if(user){
          axios.post(`/saveExperience/${resume.userId}`,{
            experience:expToRemove
            })
            .then(res=>{
              console.log(res.data)
            })
            .catch(error=>{
              console.log(error)
            })
        }
      }
      
      


    return(
        <article className='exp'>
        <h2>Experience</h2>
        {buttons?
            <Button className={classes.btn}  variant="contained" color="primary" type="button" onClick={addExp}>
                Add Experience
            </Button>:
            ""}
        <section>
                {resume.experience.length>0?resume.experience.map((e,i)=>{
                    return(
                        <div key={Math.random()}>
                        <ExpForm buttons={buttons} user={user} e={e} i={i} add={addDuty} edit={editExp}/>
                        {buttons?<Button className={classes.btn} variant="contained" style={{backgroundColor:'red',color:"white"}} type="button" onClick={(event)=>{event.preventDefault();deleteExp(i)}}>Delete</Button>:""}
                        </div>)
                }):<h1>Add Experience</h1>}
        </section>
          
        </article>
    )
};

export default Experience;

