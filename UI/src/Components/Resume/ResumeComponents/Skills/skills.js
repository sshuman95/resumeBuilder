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





const Skills = ()=>{
    const classes = useStyles();
    const [skill, setSkill] = useState('');
    const [skillList, setSkillList] = useState([]);
    const handleEdit = (event) => {
      event.preventDefault();
      console.log(event.target.value)
      setSkill(event.target.value);
    }

    const addSkill = (event) => {
      event.preventDefault();
      event.persist();
      if(!skill){
        return
      }
      setSkillList([...skillList,skill]);
}

/*    const editEdu = (i,n,val) =>{
        edu[i][n] = val;
        setEdu([...edu]);
    }*/

    return(
        <article className='skills'>
        <h2>Skills</h2>
        <section>
            <ul>
              {skillList.map((s,i)=>{
                  return(
                      <li key={i}>{s}</li>
                  )
              })}
            </ul>
        </section>
        <form onSubmit={addSkill}>
        <TextField 
          id="skill-textArea"
          label="Skill"
          placeholder="Placeholder"
          multiline
          name="skill"
          onChange={handleEdit} 
          value={skill}
          />
        <Button variant="contained" color="primary" type="button" type="submit">
                Add Skill
            </Button>
            </form>
    </article>
    )
};

export default Skills;