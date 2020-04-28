import React, { useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EduForm from "./eduForm";
import { ButtonContext } from "../../ButtonContext";
import { ResumeContext } from "../../ResumeContext";
import { UserContext } from "../../UserContext";
import axios from "axios";

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
  const [user] = useContext(UserContext);

  const addEdu = (event) => {
    event.preventDefault();
    setResume({ ...resume, education: [...resume.education, {organization:"",date:"",details:''}] });
}

const editEdu = (i,org, date, details) =>{
    let edu = resume;
    edu.education[i].organization = org;
    edu.education[i].date = date;
    edu.education[i].details = details;
    setResume(edu);
    if(user){
      axios.post(`/saveEducation/${resume.userId}`,{
        education:edu.education
      })
      .then(res=>{
        console.log(res)
      })
      .catch(error=>{
        console.log(error)
      })
  }
}

const deleteEdu = (i) =>{
  let edu = resume;
  edu.education.splice(i,1)
  setResume({ ...resume, education: edu.education});
  if(user){
    axios.post(`/saveEducation/${resume.userId}`,{
      education:edu.education
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
      <article className='education'>
      <h2>Education</h2>
      {buttons?<Button className={classes.btn}  variant="contained" color="primary" type="button" onClick={addEdu}>
              Add Education
          </Button>:''}
              {resume.education.length>0?resume.education.map((e,i)=>{
                  return(
                    <div key={Math.random()}>
                    <EduForm  e={e} i={i} user={user} edit={editEdu}/>
                    {buttons?<Button className={classes.btn} variant="contained" style={{backgroundColor:'red',color:"white"}} type="button" onClick={(event)=>{event.preventDefault();deleteEdu(i)}}>Delete</Button>:""}
                    </div>
                    )
              }):<h1>Add Education</h1>}
          </article>
  )
};

export default Education;