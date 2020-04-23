import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ResumeContext } from "../Resume/ResumeContext";
import { ButtonContext } from "../Resume/ButtonContext";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
   btn:{
       width:170
   }
  }));
  
  
  
  
  
  const Save = ()=>{
      const classes = useStyles();
      const [resume] =useContext(ResumeContext);
      const [button] =useContext(ButtonContext);

    const handleSave = (event) =>{
        axios.post(`/createResume`,{
            header:resume.header,
            skills:resume.skills,
            education:resume.education,
            experience:resume.experience
        })
        .then(res=>{
            console.log(resume.experience)
            console.log(res)
          })
          .catch(err=>{
            console.log(err)
          })
    }
    

      return(
          <Button className={classes.btn} onClick={handleSave} variant="contained" color="primary" type="button">Save Resume</Button>
      )
  };
  
  export default Save;