import React from 'react';
import "./resume.css";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Header from "./ResumeComponents/Header/header";
import Education from "./ResumeComponents/Education/education";


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      margin:"50px auto",
      '@media (max-width:750px)': {
        width: 345,
        flexGrow: 1,
      },
    },
  }));

function Resume() {
    const classes = useStyles();
      return (
         <Paper elevation={3} className={classes.root}>
            <div className="resumeMain">
               <Header/>
                <article className='exp'>
                    <h2>Experience</h2>
                    <section>
                        <h3>ePlus - Glen Allen, VA </h3>
                        <h5>IT Project Coordinator</h5>
                        <ul>
                            <li>Developed internal application using Quickbase that streamlines efficiency and  automation in the following areas: Asset Management, Resource Management,  Resource allocation, Monthly Service Deliverables.  </li>
                            <li>Made HTML elements and Javascript functions to help ease the use of Quickbase.</li>
                            <li>This includes custom reports to easily add or delete specific records and easily  move records between tables.</li>
                            <li>Communicated weekly with leadership and external vendor to deliver key  Deliverables and Project Milestones.</li>
                            <li>Identified issues within databases, performed troubleshooting and  implemented effective solutions.  </li>
                        </ul>
                    </section>
                    <section>
                        <h3>KJPresley Designs - Glen Allen, VA </h3>
                        <h5>Full Stack Developer - https://www.kjpresleydesigns.com/​</h5>
                        <ul>
                            <li>Analyzed requirements and designed, developed and implemented software  applications for an intuitive, customer focused site.</li>
                            <li>Used programming capabilities in React, Firebase, HTML, CSS, JS, Node, Express  and other libraries as needed to create an  E-commerce application. </li>
                            <li>Programmed admin portal that tracks status of orders and allows the end user to  easily create, update, and delete items from the store.</li>
                            <li>Integrated Stripe API to allow easy and secure transactions.</li>
                            <li>Established web hosting for site and uploaded site files to hosting account.</li>
                            <li>Created restful API to capture user data and display reports stored in a Firebase database.</li>
                        </ul>
                    </section>
                    <section>
                        <h3>Home History - Glen Allen, VA </h3>
                        <h5>Full Stack Developer - https://homehistory.org/​</h5>
                        <ul>
                            <li>Created eye catching and functional digital design concepts across various platforms to strengthen company brand and identity. </li>
                            <li>Used programming capabilities in React, Firebase, HTML, CSS, JS, Node, Express and  other libraries as needed.</li>
                            <li>Established web hosting for site and uploaded site files to hosting account.</li>
                            <li>Kept abreast of emerging technologies, software and trends and project  applications.</li>
                            <li>JSON data is queried and mapped when a user searches for an address.</li>
                            <li>Employed Google Autocomplete address API to easily fetch data and keep queries consistent throughout the app.</li>
                        </ul>
                    </section>
                </article>
                <article className='skills'>
                    <h2>Skills</h2>
                    <section>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>GIT</li>
                            <li>Firebase</li>
                            <li>MongoDB</li>
                            <li>Responsive Design</li>
                            <li>Restful API's</li>
                        </ul>
                    </section>
                </article>
                <Education/>
            </div>
         </Paper>
        )
    };
export default Resume;

