import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ButtonContext } from "../../ButtonContext";
import { ResumeContext } from "../../ResumeContext";

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
    const handleEdit = (event) => {
      event.preventDefault();
      setSkill(event.target.value);
    }

    const addSkill = (event) => {
      event.preventDefault();
      if(skill){
        resume.skills.push(skill)
        setResume(resume);
        setSkill('');
      } else {
        return
      }
    
}


    return(
      
        <article className='skills'>
        <h2>Skills</h2>
        <section>
            <ul>
              {resume.skills?resume.skills.map((s,i)=>{
                  return(
                      <li key={i}>{s}</li>
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