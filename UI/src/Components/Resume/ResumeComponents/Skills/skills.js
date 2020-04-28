import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ButtonContext } from "../../ButtonContext";
import { ResumeContext } from "../../ResumeContext";
import { UserContext } from "../../UserContext";
import axios from 'axios'



const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  btn:{
    marginTop:5
  }
}));




const Skills = ()=>{
    const classes = useStyles();
    const [skill, setSkill] = useState('');
    const [buttons] = useContext(ButtonContext);
    const [resume,setResume] = useContext(ResumeContext);
    const [user] = useContext(UserContext)

    useEffect(()=>{
      if(user){
        console.log('hello')
      } else {
        return
      }
    },[user])
    
    const handleEdit = (event) => {
      event.preventDefault();
      setSkill(event.target.value);
    }

    const addSkill = (event) => {
      event.preventDefault();
      let skillsToAdd = resume;
      if(skill && user){
        skillsToAdd.skills.push(skill)
        setResume(skillsToAdd);
        setSkill('');
        axios.post(`/saveSkills/${resume.userId}`,{
          skills:skillsToAdd.skills
          })
          .then(res=>{
            console.log(res)
          })
          .catch(error=>{
            console.log(error)
          })
      } else if(skill){
        skillsToAdd.skills.push(skill)
        setResume(skillsToAdd);
        setSkill('');
      } else {
        return
      }
    
}

const deleteSkill = (i) =>{
  let skillsToRemove = resume.skills
  skillsToRemove.splice(i,1);
  setResume({ ...resume, skills: skillsToRemove});
  if(user){
    axios.post(`/saveSkills/${resume.userId}`,{
      skills:skillsToRemove
      })
      .then(res=>{
        console.log(res)
      })
      .catch(error=>{
        console.log(error)
      })
  }
}


    return(
      
        <article className='skills'>
        <h2>Skills</h2>
        <section>
            <ul>
              {resume.skills?resume.skills.map((s,i)=>{
                  return(
                      <div key={Math.random()}>
                      <li>{s}</li>
                     {buttons?<button onClick={(e)=>{e.preventDefault(); deleteSkill(i)}}>X</button>:""}
                      </div>
                  )
              }):''}
            </ul>
        </section>
        {buttons?<form onSubmit={addSkill}>
          <TextField 
          id="skill-textArea"
          label="Skill"
          placeholder="Placeholder"
          multiline
          name="skill"
          onChange={handleEdit} 
          value={skill}
          />
        <Button variant="contained" className={classes.btn} color="primary" type="submit">
                Add Skill
            </Button>
            </form>:''}
    </article>
    )
};

export default Skills;