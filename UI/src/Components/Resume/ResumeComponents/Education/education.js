import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EduForm from "./eduForm";
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
    marginTop:5,
    width:155
  }
}));





const Education = ()=>{
  const classes = useStyles();
  const [resume,setResume] =useContext(ResumeContext);
  const [buttons] =useContext(ButtonContext)


  const addEdu = (event) => {
    setResume({ ...resume, education: [...resume.education, {organization:"",date:"",details:''}] });

}

const editEdu = (i,org, date, details) =>{
    let edu = resume;
    edu.education[i].organization = org;
    edu.education[i].date = date;
    edu.education[i].details = details;
    setResume(resume)
}

const editOrg = (i, org) =>{
console.log(org)
}

  return(
      <article className='education'>
      <h2>Education</h2>
              {resume.education.length!==0?resume.education.map((e,i)=>{
                  return(
                   
                    <EduForm key={i} e={e} i={i}  editOrg={editOrg} edit={editEdu}/>
                    )
              }):<h1>Add Education</h1>}
         {buttons?<Button className={classes.btn}  variant="contained" color="primary" type="button" onClick={addEdu}>
              Add Education
          </Button>:''}
          
          </article>
  )
};

export default Education;