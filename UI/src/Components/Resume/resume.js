import React from 'react';
import "./resume.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Header from "./ResumeComponents/Header/header";
import Education from "./ResumeComponents/Education/education";
import Skills from "./ResumeComponents/Skills/skills";
import Experience from "./ResumeComponents/Experience/experience";


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      margin:"50px auto",
      '@media (max-width:750px)': {
        width: 345,
        flexGrow: 1,
      },
      paddingBottom:15
    },
  }));

function Resume() {
    const classes = useStyles();
      return (
         <Paper elevation={3} className={classes.root}>
            <div className="resumeMain">
              
                <Header/>
                <Experience/>
                <Skills/>
                <Education/>
          
            </div>
         </Paper>
        )
    };
export default Resume;

